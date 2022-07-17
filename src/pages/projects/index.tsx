import Image from "next/image.js";
import { Tag } from "../../components/Tag";
import { getTagColour } from "../../lib/tag";

export default function Projects({ className }: { className: string }) {
    return (
        <div className={className}>
            <h1 className="text-5xl font-bold mt-16">Projects</h1>
            <h2 className="text-lg font-medium">
                Write-ups on projects which hold some significance.
            </h2>
            <div className="flex gap-4 max-h-32">
                <div className="h-32 min-h-32 w-full">
                    <div className="relative w-full h-32">
                        <Image
                            src="https://res.cloudinary.com/demo/image/fetch/https://preplar.tika.is/Preview.png"
                            layout="fill"
                            objectFit="scale-down"
                            alt="The Preplar app page"
                        />
                    </div>
                    {/* <p>The Preplar app page</p> */}
                </div>

                <div className="max-h-32">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-2xl font-medium">
                            Building Preplar
                        </h1>
                        <div className="flex gap-1">
                            <Tag name="5 commits" />
                            <Tag name="Javascript" />
                        </div>
                    </div>
                    <p className="truncate whitespace-normal max-h-32">
                        Started in October 2020, Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed tristique dolor et
                        blandit vulputate. Aliquam egestas eget augue ut
                        vestibulum. Sed sed ex sed nulla feugiat accumsan
                        pretium eu nisi. Aenean aliquam nunc quis sapien
                        gravida, eu sodales tellus placerat. Sed nisi quam,
                        feugiat vel sodales quis, fringilla ut velit. Sed et
                        nibh lectus. Vestibulum ultrices hendrerit porta. Proin
                        et magna quis metus fermentum ornare. Sed tristique
                        dolor et blandit vulputate. Aliquam egestas eget augue
                        ut vestibulum. Sed sed ex sed nulla feugiat accumsan
                        pretium eu nisi. Aenean aliquam nunc quis sapien
                        gravida, eu sodales tellus placerat. Sed nisi quam,
                        feugiat vel sodales quis, fringilla ut velit. Sed et
                        nibh lectus. Vestibulum ultrices hendrerit porta. Proin
                        et magna quis metus fermentum ornare.
                    </p>
                </div>
            </div>
        </div>
    );
}
