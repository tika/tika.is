interface CrucialData {
    repos: Repo[];
    privateRepoCount: number;
    publicRepoCount: number;
}

interface Repo {
    name: string;
    description: string;
    forked: boolean;
    language: string;
    license: string;
    visibility: string;
    stars: number;
    fork_count: number;
    url: string;
    languageColors: string;
}

interface GithubRepository {
    full_name: string;
    description: string;
    fork: boolean;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    license: string;
    language: string;
    visibility: string;
}
