import { Tag } from "../components/Tag";
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

export interface PreviewWriteup {
    image: string;
    title: string;
    tagline: string;
    tags: Tag[];
    createdAt: Date;
}
