import { Router } from "express";
import { ModuleRoute } from "src/module";
import { api, App } from "src/utils";

export const notificationRouter: ModuleRoute = (app: App) => {
  const router = Router();
  app.use("/api-admin/notification", router);

  router.post(
    "/new",
    api.authenticate,
    api.authorize,
    api.call(async () => {
      return { msg: "admin notification" };
    })
  );
};
