import Image from "next/image";
import { PreviewWriteup } from "../lib/portfolio";
export default function WriteupHeader(props: PreviewWriteup) {
    return (
        <div className="w-full">
            <h1>{props.title}</h1>
            <Image
                src={props.image}
                alt={"Represents " + props.title}
                width="100vw"
                height="100%"
                objectFit="cover"
            />
        </div>
    );
}
