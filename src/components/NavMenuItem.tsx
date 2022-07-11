import { useRouter } from "next/router.js";
import { NavItem } from "./NavItem";

interface Props {
    onClick(): void;
    destination: string;
    name: string;
    extra?: string;
}

export function NavMenuItem(props: Props) {
    const className =
        "font-medium text-lg py-4 px-6 cursor-pointer rounded hover:bg-gray-100 hover:text-theme transistion duration-150";

    return (
        <NavItem
            className={className}
            onClick={() => props.onClick()}
            destination={props.destination}
        >
            {props.name}{" "}
            {props.extra && (
                <span className="font-normal">- {props.extra}</span>
            )}
        </NavItem>
    );
}
