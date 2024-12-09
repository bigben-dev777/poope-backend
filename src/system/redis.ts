import { createClient } from "redis";

export const redis = createClient();

redis.on("error", (error) => {
  console.error("Redis client error", error);
});

export const initRedis = async () => {
  try {
    await redis.connect();
    console.log("Redis connected");
  } catch (error) {
    const msg = (error as Error).message;
    throw new Error(msg);
  }
};
