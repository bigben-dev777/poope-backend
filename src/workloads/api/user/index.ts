import { Router } from "express";
import { ModuleRoute } from "src/module";
import { passport } from "src/system";
import { api, App } from "src/utils";

export const userRouter: ModuleRoute = (app: App) => {
  const router = Router();
  app.use("/api/user", router);

  router.get(
    "/test",
    api.call(async () => {
      return { msg: "healthcasre" };
    })
  );

  router.get(
    "/login",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  router.get(
    "/callback",
    api.call(async () => {
      console.log("asdfhklhfdasjkl");
    })
  );
};
