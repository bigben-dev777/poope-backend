import express from "express";
import http from "http";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

export const app = express();
export const server = http.createServer(app);

export const loadExpressMiddleware = () => {
  [
    helmet(),
    compression(),
    express.json(),
    express.urlencoded({ extended: false }),
    cors(),
  ].forEach((middleware) => app.use(middleware));
};
