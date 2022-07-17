interface PostProps {
    title: string;
    createdAt: number;
    mediaURL: string;
    className: string;
}

export function ProjectPost(props: PostProps) {
    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
        </div>
    );
}
