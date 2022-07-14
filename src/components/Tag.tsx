import { getTagColour } from "../lib/tag";

interface TagProps {
    name: string;
}

export function Tag({ name }: TagProps) {
    return (
        <div className={`rounded-full px-4 ${getTagColour(name)}`}>
            <h1 className="white">{name}</h1>
        </div>
    );
}
