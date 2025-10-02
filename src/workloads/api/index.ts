import { userRouter } from "./user";
import { ModuleRoute } from "src/module";

const routes = [userRouter];

export const run: ModuleRoute = (app, passport, io) => {
  for (const router of routes) {
    router(app, passport, io);
  }
};

export const apiWorkload = {
  name: "api",
  run,
};
