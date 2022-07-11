import React from "react";
import { useRouter } from "next/router";
import Link from "next/link.js";

interface NavItemProps {
    destination?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export function NavItem(props: NavItemProps) {
    const router = useRouter();

    return (
        <Link href={props.destination ?? ""}>
            <h1
                className={`${props.className} font-semibold ${
                    router.asPath === props.destination && "italic"
                }
                duration-150
              hover:text-theme
                hover:cursor-pointer`}
                onClick={props.onClick}
            >
                {props.children}
            </h1>
        </Link>
    );
}
