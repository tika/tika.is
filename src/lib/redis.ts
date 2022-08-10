import Redis from "ioredis";
import { env } from "./env";

const redis = new Redis(env.REDIS_URL, {
    tls: {
        rejectUnauthorized: false,
    },
});

export default redis;
