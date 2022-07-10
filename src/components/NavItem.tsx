import React from "react";
import { useRouter } from "next/router";

interface NavItemProps {
    selected?: boolean;
    destination?: string;
    children: React.ReactNode;
}

export function NavItem(props: NavItemProps) {
    const router = useRouter();

    return (
        <h1
            className={`font-semibold ${props.selected && "italic"} 
            duration-150
            hover:text-theme
            hover:cursor-pointer`}
            onClick={() => router.push(props.destination ?? "/")}
        >
            {props.children}
        </h1>
    );
}
