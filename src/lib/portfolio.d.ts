interface CrucialData {
    pinned: PinnedRepo[];
}

export type PinnedRepo = {
    owner: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: string;
};
