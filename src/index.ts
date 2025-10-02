import { app, init, io, run } from "src/system";
import { runWorkload } from "./workloads";
import passport from "passport";

const bootstrap = async () => {
  await init();
  run();
  load();
};

const load = () => {
  runWorkload("api", app, passport, io);
};

bootstrap().catch((error) => {
  console.error(error);
});
