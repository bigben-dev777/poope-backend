import dotenv from "dotenv";
import { DeepNonNullable, DeepReadonly } from "ts-essentials";

dotenv.config();

const nullableConfig = {
  port: process.env.PORT || 3003,
  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/poope",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
  },
  worker: process.env.WORKER,
  redis: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    lifetime: process.env.JWT_LIFETIME || "1d",
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
};

type Config = DeepReadonly<DeepNonNullable<typeof nullableConfig>>;

export const config = nullableConfig as Config;
