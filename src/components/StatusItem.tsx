import Link from "next/link.js";
import { useRouter } from "next/router.js";
import React from "react";
import { IconType } from "react-icons/lib";

interface StatusItemProps {
    text: string;
    icon: IconType;
    url?: string;
}

export function StatusItem(props: StatusItemProps) {
    const router = useRouter();

    return (
        <div
            className={`flex items-center gap-4 ${
                props.url && "cursor-pointer hover:opacity-50"
            }`}
            onClick={() => props.url && router.push(props.url)}
        >
            <span>{props.icon({ className: "h-6 w-6 text-theme" })}</span>
            <span>{props.text}</span>
        </div>
    );
}

function FormattedText({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    if (!children) return null;
    const text = children.toString();

    const arr = text.split("**");

    return (
        <h2 className={className}>
            {arr.map((it, i) =>
                i % 2 !== 0 ? (
                    <span key={i} className={"text-theme"}>
                        {it}
                    </span>
                ) : (
                    it
                )
            )}
        </h2>
    );
}
