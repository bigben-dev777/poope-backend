import { ModuleRoute } from "src/module";
import { notificationRouter } from "./notification";

const routers = [notificationRouter];
const run: ModuleRoute = (app, passport, io) => {
  for (const router of routers) {
    router(app, passport, io);
  }
};

export const apiAdminWorkload = {
  name: "api-admin",
  run,
};
