import React from "react";
import Image from "next/image";
import config from "../../tikac.json";

interface StatusItemProps {
    imageURL?: string;
    heading: string;
    subtext: string;
    altText?: string;
}

export function StatusItem(props: StatusItemProps) {
    return (
        <div className="flex items-center gap-4">
            <div className={"h-16 w-16 relative"}>
                <Image
                    src={props.imageURL ?? config.inactive_img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    alt={props.altText ?? "Active app icon"}
                />
            </div>
            <div>
                <FormattedText className="font-semibold">
                    {props.heading}
                </FormattedText>
                <FormattedText>{props.subtext}</FormattedText>
            </div>
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
