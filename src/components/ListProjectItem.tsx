import Link from "next/link.js";
import { GoLock } from "react-icons/go";

interface ListProjectItemProps {
    project: Repo;
}

export function ListProjectItem({ project }: ListProjectItemProps) {
    const col = "flex flex-col justify-center gap-1 p-4";
    const title = "font-medium underline";

    return (
        <div className="flex rounded-xl border-gray-100 border-solid overflow-hidden border cursor-pointer hover:bg-gray-100 h-28">
            <div className={`${col} w-48 min-w-48`}>
                <span className={title}>name</span>
                {project.visibility === "private" ? (
                    <div className="flex gap-1 items-center">
                        <GoLock />
                        <h3>{project.name}</h3>
                    </div>
                ) : (
                    <Link href={project.url}>{project.name}</Link>
                )}
            </div>

            <div className={`${col} border-x border-gray-100 w-32 min-w-32`}>
                <span className={title}>language</span>
                <div className="flex gap-2 items-center">
                    <div
                        className="w-2 h-2 rounded"
                        style={{ backgroundColor: project.languageColors }}
                    />
                    <h3>{project.language}</h3>
                </div>
            </div>

            <div className={`${col}`} style={{ width: "fit-content" }}>
                <span className={title}>description</span>
                <h3>{project.description ?? "No description"}</h3>
            </div>
        </div>
    );
}
