interface ListProjectItemProps {
    project: Repo;
}

export function ListProjectItem({ project }: ListProjectItemProps) {
    return (
        <div className="flex">
            <div>
                <span>Name</span>
                <h3>{project.name}</h3>
            </div>

            <div>
                <span>Language</span>
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: project.languageColors }}
                />
                <h3>{project.language}</h3>
            </div>
        </div>
    );
}
