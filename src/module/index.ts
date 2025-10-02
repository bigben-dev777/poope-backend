import { App, Io, Passport } from "src/utils";
import { AsyncOrSync } from "ts-essentials";

export * from "./user";

export type ModuleRoute = (
    app: App,
    passport: Passport,
    io: Io 
  ) => AsyncOrSync<void>;