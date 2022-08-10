import { str, envsafe } from "envsafe";
import * as dotenv from "dotenv";

if (typeof window !== "undefined") {
    throw new Error(
        "This should only be included on the client (but the env vars wont be exposed)"
    );
}

dotenv.config({ path: `../../.env.local` });

export const env = envsafe({
    NODE_ENV: str({
        devDefault: "development",
        choices: ["development", "test", "production"],
    }),
    GITHUB_TOKEN: str({
        devDefault: "ghp_xxxxx",
        desc: "GitHub API token (beginning with ghp_)",
    }),
    REDIS_URL: str({
        devDefault: "redis://xxx",
        desc: "The URL of the Redis server",
    }),
});
