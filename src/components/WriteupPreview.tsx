import Image from "next/image";
import Link from "next/link";
import { PreviewWriteup } from "../lib/portfolio";
import { Tag } from "./Tag";

export default function WriteupPreview(props: PreviewWriteup) {
    return (
        <Link
            href={`/projects/${props.title.split(" ").join("-").toLowerCase()}`}
        >
            <div>
                <Image
                    src={props.image}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
                <h1>{props.title}</h1>
                <h2>{props.tagline}</h2>
                <div className="flex gap-1">
                    {props.tags.map((it, id) => (
                        <Tag key={id} name={it} />
                    ))}
                </div>
            </div>
        </Link>
    );
}
