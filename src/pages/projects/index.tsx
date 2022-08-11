import Image from "next/image";
import { Title } from "../../components/Title";
import WriteupPreview from "../../components/WriteupPreview";
import {
    getPreviewWriteup,
    getPreviewWriteupComponent,
} from "../../lib/writeups";

export default function Projects({ className }: { className: string }) {
    return (
        <>
            <Title text="Project write-ups" />
            <div className={className}>
                <h1 className="text-5xl font-bold mt-16">Projects</h1>
                <h2 className="text-lg font-medium">
                    Write-ups on projects which hold some significance
                </h2>
                <div>{getPreviewWriteupComponent("Preplar")}</div>
            </div>
        </>
    );
}
