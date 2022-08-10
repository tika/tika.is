import { createEndpoint } from "../../lib/endpoint";
import axios from "axios";
import {
    CrucialData,
    PinnedRepo,
    PinnedRepoResponse,
} from "../../lib/portfolio";
import redis from "../../lib/redis";

// Redis keys
const PINNED_REPO_KEY = "pinned";

export default createEndpoint<CrucialData>({
    GET: async (req, res) => {
        let pinned: PinnedRepo[] = [];
        let redisPinned = await redis.get(PINNED_REPO_KEY);

        if (!redisPinned) {
            const pResp = await axios.get<PinnedRepoResponse[]>(
                "https://gh-pinned-repos.egoist.dev/?username=tika"
            );

            pinned = pResp.data.map((it) => {
                return {
                    ...it,
                    url: `https://github.com/${it.owner}/${it.repo}`,
                };
            });

            redis.set(PINNED_REPO_KEY, JSON.stringify(pinned), "EX", 60 * 60);
        } else {
            pinned = JSON.parse(redisPinned);
        }

        res.json({
            pinned,
        });
    },
});
