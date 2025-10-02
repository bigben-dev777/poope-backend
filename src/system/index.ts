import { config } from "./config";
import { initMongoDB } from "./mongo";

export * from "./config";
export * from "./mongo";
export * from "./express";
export * from "./redis";
export * from './winston';
export * from './morgan';
export * from './socket';

import { server, loadExpressMiddleware } from "./express";

export const init = async () => {
  // Open mongodb connection pool
  await initMongoDB();

  // Attach all express middlewares
  loadExpressMiddleware();
};

export const run = () => {
  server
    .listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    })
    .on("error", (error: Error) => {
      throw new Error(error.message);
    });
};
