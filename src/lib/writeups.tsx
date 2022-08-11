import WriteupPreview from "../components/WriteupPreview";
import { PreviewWriteup } from "./portfolio";

// stores all of our writeups
const titles = ["Preplar"] as const;
const writeups: (PreviewWriteup & {
    title: typeof titles[number];
})[] = [
    {
        title: "Preplar",
        image: "https://images.unsplash.com/photo-1582137490248-c53207ec5602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        tagline: "A hyper-simplistic note-taking app",
        tags: ["js", "producthunt"],
        createdAt: new Date("25 November 2020"),
    },
];

export function getPreviewWriteup(writeupTitle: typeof titles[number]) {
    // Will always have an index
    const writeup = writeups.filter((it) => it.title === writeupTitle)[0];
    return writeup;
}

// Stores all of our writeups
export function getPreviewWriteupComponent(
    writeupTitle: typeof titles[number]
) {
    const writeup = getPreviewWriteup(writeupTitle);

    return <WriteupPreview {...writeup} />;
}
