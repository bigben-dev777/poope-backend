import express, { Request, Response, NextFunction } from "express";
import { Server } from "socket.io";
import passport from "passport";
import { ApiValidationError } from "src/utils";
import { logger } from "src/system";
import { User } from "src/module";

export type Router = express.Router;
export type App = express.Express;
export type Passport = passport.PassportStatic;
export type Io = Server;

export interface S3Req extends Request {
  user: Omit<User, "password">;
}

export const isS3Req = <T extends Request>(req: T) => {
  return !!req && !!req.user;
};

const call =
  (process: (req: Request, res: Response) => Promise<unknown>) =>
  (req: Request, res: Response) => {
    process(req, res)
      .then((data) => {
        if (!res.headersSent) {
          res.json(data || { success: true });
        }
      })
      .catch((e) => {
        logger.error(e);
        if (e instanceof ApiValidationError) {
          res.status(400).json({
            code: e.code,
            message: e.message,
            field: e.options.field,
          });
          return;
        }

        res.status(500).send("Internal server error");
      });
  };

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false })(req, res, next);
};

const googleOAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("google", { session: false })(req, res, next);
};

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User;

  if (!user || user.role !== "admin") {
    res.status(403).json({ message: "Forbidden: Admin access required" });
    return;
  }

  next();
};

export const api = { authenticate, call, googleOAuthenticate, authorize };
