import dotenv from "dotenv";
import { DeepNonNullable, DeepReadonly } from "ts-essentials";

dotenv.config();

const nullableConfig = {
  port: process.env.PORT || 3003,
  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/casino",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
  },
  worker: process.env.WORKER,
};

type Config = DeepReadonly<DeepNonNullable<typeof nullableConfig>>;

export const config = nullableConfig as Config;
