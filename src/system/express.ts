import express from "express";
import http from "http";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { getPassport } from "src/utils";
import { morganMiddleware } from "./morgan";

export const app = express();
export const server = http.createServer(app);

export const passport = getPassport();

export const loadExpressMiddleware = () => {
  [
    morganMiddleware,
    helmet(),
    compression(),
    express.json(),
    express.urlencoded({ extended: false }),
    cors(),
    passport.initialize(),
  ].forEach((middleware) => app.use(middleware));
};
