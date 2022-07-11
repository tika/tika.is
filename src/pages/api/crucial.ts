import { createEndpoint } from "../../lib/endpoint";
import axios from "axios";
import redis from "../../lib/redis";

export default createEndpoint<CrucialData>({
    GET: async (req, res) => {
        let repos: Repo[] = [];
        let page = 1;

        // get github language colors from ozh's repo
        let colors = await redis.get("colors");

        if (!colors) {
            colors = await getLanguageColors();

            // updates every day -> now we don't have to refetch!
            redis.set("colors", JSON.stringify(colors), "EX", 60 * 60 * 24);
        }

        if (typeof colors === "string") {
            colors = JSON.parse(colors);
        }

        // if i've already got all the info, then there's no point in refetching
        // sidenote: not entirely sure if this is "good" design, but it works
        const recent = await redis.get("data");

        if (recent) {
            return res.send(JSON.parse(recent));
        }

        // -- GET DATA --

        // this basically gets every repo that I have, because GitHub won't let me get ALL repos at once
        do {
            // get 100 repos
            await axios
                .get(
                    `https://api.github.com/user/repos?per_page=100&page=${page}`,
                    {
                        headers: {
                            Authorization: `token ${process.env.GITHUB_TOKEN}`,
                        },
                    }
                )
                .then(({ data }) => {
                    // GitHub associates ANY repo that i've touched with me so I only want the repos I own
                    // nb: in future this might change, due to joint ownership and stuff
                    const myRepos = data.filter(
                        (it: any) => it.owner.login === "tika"
                    );

                    // join the repos to the list we already
                    repos = repos.concat(
                        myRepos.map((it: any) => toRepo(it, colors))
                    );
                });

            page++;
        } while (repos.length === 100 * (page - 1));

        const privateRepoCount = repos.filter(
            (repo) => repo.visibility === "private"
        ).length;

        const data = {
            repos,
            privateRepoCount,
            publicRepoCount: repos.length - privateRepoCount,
        };

        // updates every 30 mins
        redis.set("data", JSON.stringify(data), "EX", 60 * 30);

        res.send(data);
    },
});

function getLanguageColors() {
    return axios
        .get(
            "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
        )
        .then(({ data }) => data);
}

function toRepo(x: GithubRepository, colors: any): Repo {
    return {
        name: x.full_name
            .split("/")
            .filter((it: string, i: number) => i !== 0)
            .join("/"),
        description: x.description,
        forked: x.fork,
        url: x.html_url,
        stars: x.stargazers_count,
        fork_count: x.forks_count,
        license: x.license,
        language: x.language,
        visibility: x.visibility,
        languageColors: colors[x.language] ? colors[x.language].color : "white", // if this color isn't found
    };
}
