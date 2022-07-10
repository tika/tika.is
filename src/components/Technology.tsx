import { IconType } from "react-icons";

export default function Technology({
    name,
    icon,
}: {
    name: string;
    icon: IconType;
}) {
    return (
        <div className="flex gap-2">
            <span>{icon({ className: "h-6 w-6 text-theme" })}</span>
            <span>{name}</span>
        </div>
    );
}
