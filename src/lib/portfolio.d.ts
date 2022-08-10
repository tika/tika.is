interface CrucialData {
    pinned: PinnedRepo[];
}

type PinnedRepo = PinnedRepoResponse & { url: string };

export type PinnedRepoResponse = {
    owner: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: string;
};
