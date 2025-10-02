import { App, Passport, Io } from "src/utils";
import { apiWorkload } from "./api";
import { apiAdminWorkload } from "./api-admin";

type WorkloadName = keyof typeof workloads;

const workloads = {
  api: apiWorkload,
  "api-admin": apiAdminWorkload,
};

export const runWorkload = (
  workloadName: WorkloadName,
  app: App,
  passport: Passport,
  io: Io
) => {
  workloads[workloadName].run(app, passport, io);
};
