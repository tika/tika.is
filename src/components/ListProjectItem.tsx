import Link from "next/link.js";
import { GoLock } from "react-icons/go";

interface ListProjectItemProps {
    project: Repo;
    destination: string;
}

export function ListProjectItem({
    project,
    destination,
}: ListProjectItemProps) {
    const col = "flex flex-col justify-center gap-1 p-4";
    const title = "font-medium underline";

    return (
        <Link href={destination}>
            <div className="flex flex-col sm:flex-row rounded-xl border-gray-100 border-solid overflow-hidden border cursor-pointer hover:bg-gray-100 sm:h-28">
                <div className={`${col} sm:w-48 sm:min-w-48`}>
                    <span className={title}>name</span>
                    {project.visibility === "private" ? (
                        <div className="flex gap-1 items-center">
                            <GoLock />
                            <h3>{project.name}</h3>
                        </div>
                    ) : (
                        <h3>{project.name}</h3>
                    )}
                </div>

                <div
                    className={`${col} border-y sm:border-x border-gray-100 sm:w-32 sm:min-w-32`}
                >
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
        </Link>
    );
}
