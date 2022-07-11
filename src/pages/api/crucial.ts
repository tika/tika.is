import { createEndpoint } from "../../lib/endpoint";
import axios from "axios";

export default createEndpoint<CrucialData>({
    GET: async (req, res) => {
        let repos: Repo[] = [];
        let page = 1;

        const colors = await axios
            .get(
                "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
            )
            .then(({ data }) => data);

        do {
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
                    const myRepos = data.filter(
                        (it: any) => it.owner.login === "tika"
                    );

                    repos = repos.concat(
                        myRepos.map((it: any) => toRepo(it, colors))
                    );
                });

            page++;
        } while (repos.length === 100 * (page - 1));

        const privateRepoCount = repos.filter(
            (repo) => repo.visibility === "private"
        ).length;

        res.send({
            repos,
            privateRepoCount,
            publicRepoCount: repos.length - privateRepoCount,
        });
    },
});

export function toRepo(x: GithubRepository, colors: any): Repo {
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
