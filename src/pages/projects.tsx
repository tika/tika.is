import Image from "next/image.js";
import { Tag } from "../components/Tag";
import { getTagColour } from "../lib/tag";

export default function Projects() {
    return (
        <div className="mt-24">
            <h1 className="text-5xl font-bold">Projects</h1>
            <div className="flex gap-4">
                <div className="relative min-w-content min-h-content">
                    <Image
                        src="https://res.cloudinary.com/demo/image/fetch/https://preplar.tika.is/Preview.png"
                        layout="fill"
                        objectFit="cover"
                        alt="The Preplar app page"
                    />
                </div>

                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-2xl font-medium">
                            Building Preplar
                        </h1>
                        <div className="flex gap-1">
                            <Tag name="5 commits" />
                            <Tag name="Javascript" />
                        </div>
                    </div>
                    <h1>
                        Started in October 2020, Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed tristique dolor et
                        blandit vulputate. Aliquam egestas eget augue ut
                        vestibulum. Sed sed ex sed nulla feugiat accumsan
                        pretium eu nisi. Aenean aliquam nunc quis sapien
                        gravida, eu sodales tellus placerat. Sed nisi quam,
                        feugiat vel sodales quis, fringilla ut velit. Sed et
                        nibh lectus. Vestibulum ultrices hendrerit porta. Proin
                        et magna quis metus fermentum ornare.
                    </h1>
                </div>
            </div>
        </div>
    );
}
