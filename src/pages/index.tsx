import { useRef } from "react";
import config from "../../tikac.json";
import Technology from "../components/Technology";
import {
    SiAmazons3,
    SiFirebase,
    SiGradle,
    SiJava,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiRedis,
    SiTypescript,
    SiYarn,
} from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { ListProjectItem } from "../components/ListProjectItem";
import Link from "next/link.js";
import useSWR from "swr";
import Loader from "react-ts-loaders/dist/index";
import Spiral from "../public/Spiral clay.png";
import Rings from "../public/Rings clay.png";
import Marshmallow from "../public/Marshmallow clay.png";
import Image from "next/image.js";

export default function Home({ className }: { className: string }) {
    const next = useRef<HTMLDivElement | null>(null);
    const { data, error } = useSWR<CrucialData>("/api/crucial");

    if (error)
        return (
            <h1>
                {error.name} - {error.message}
            </h1>
        );

    return (
        <div className={className}>
            {data ? (
                <>
                    <div
                        style={{
                            height: "calc(100vh - (0.25rem * 40))",
                        }}
                        className="relative py-16 flex flex-col justify-between"
                    >
                        <div className="absolute w-1/2 bottom-32 sm:bottom-1/4 rotate-12 left-16 sm:left-16 sm:w-1/2 select-none">
                            <Image
                                src={Rings}
                                className="object-scale-down opacity-50"
                                draggable="false"
                                alt="Planet 1"
                                style={{
                                    filter: "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(146deg) saturate(600%) contrast(0.8)",
                                }}
                            />
                        </div>

                        <div className="absolute w-2/6 top-1/4 sm:top-8 right-8 sm:right-16 sm:w-1/4 select-none">
                            <Image
                                src={Marshmallow}
                                className="object-scale-down opacity-50"
                                draggable="false"
                                alt="Planet 2"
                                style={{
                                    filter: "grayscale(100%) brightness(50%) sepia(100%) hue-rotate(146deg) saturate(600%) contrast(0.8)",
                                }}
                            />
                        </div>

                        <div className="text-black h-full flex flex-col justify-center items-center">
                            <div className="flex">
                                <h1 className="text-9xl font-bold">TIKA</h1>

                                <Link
                                    href="https://earth.google.com/web/search/Saturn"
                                    className="rounded-full drop-shadow-lg font-semibold text-xs"
                                >
                                    <div className="h-8 flex justify-center items-center gap-2 hover:opacity-50 cursor-pointer z-20 bg-white rounded-full px-2 shadow-md">
                                        <HiLocationMarker className="text-theme" />
                                        S.🪐
                                    </div>
                                </Link>
                            </div>
                            <h2 className="text-2xl">Software Engineer</h2>
                        </div>

                        <div className="absolute bottom-0 left-1/2">
                            <div
                                onClick={() =>
                                    next.current &&
                                    next.current.scrollIntoView()
                                }
                                className="w-8 h-8 border-theme border-4 rounded-full absolute cursor-pointer left-1/2"
                            />
                        </div>
                    </div>

                    <div ref={next} className="my-24">
                        <h1 className="text-3xl font-semibold">Projects</h1>
                        <h2>
                            Primarily focused on web development, I&apos;ve
                            crafted {data.privateRepoCount} private &{" "}
                            {data.publicRepoCount} public repositories on{" "}
                            <Link href="https://github.com/tika/">
                                <span className="underline cursor-pointer hover:text-theme">
                                    my GitHub
                                </span>
                            </Link>
                            . I primarily use GitHub to keep a backup for my
                            code, and since it&apos;s hosted on the cloud, I can
                            share it with others. I&apos;m interested in open
                            sourcing and would like to be involved in more open
                            source projects in the future.
                            <br />
                            <br />
                            Below is a list of a few projects. While not
                            exhaustive, these are a few of my favourites. You
                            can find write ups on projects{" "}
                            <Link href="/projects">
                                <span className="underline cursor-pointer hover:text-theme">
                                    here
                                </span>
                            </Link>
                            .
                        </h2>
                        <div className="flex flex-col gap-2 mt-8">
                            {data.repos
                                .filter((it) =>
                                    config.favourite_projects.includes(
                                        it.name.toLowerCase()
                                    )
                                )
                                .map((it, i) => (
                                    <ListProjectItem
                                        key={it.url}
                                        project={it}
                                        destination={it.url}
                                    />
                                ))}
                        </div>
                    </div>

                    <div className="my-24">
                        <h1 className="text-3xl font-semibold">Technologies</h1>
                        <h2>
                            I&apos;m always looking to incorporate new
                            technologies into my projects, as they improve on
                            the efficiency and optimisation for the modern
                            program.
                        </h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                            <Technology name="Typescript" icon={SiTypescript} />
                            <Technology name="Python" icon={SiPython} />
                            <Technology name="Java" icon={SiJava} />
                            <Technology name="Yarn" icon={SiYarn} />
                            <Technology name="Gradle" icon={SiGradle} />
                            <Technology name="Next.js" icon={SiNextdotjs} />
                            <Technology name="React" icon={SiReact} />
                            <Technology name="PostgreSQL" icon={SiPostgresql} />
                            <Technology name="MongoDB" icon={SiMongodb} />
                            <Technology name="Prisma" icon={SiPrisma} />
                            <Technology name="Firebase" icon={SiFirebase} />
                            <Technology name="Amazon S3" icon={SiAmazons3} />
                            <Technology name="Redis" icon={SiRedis} />
                        </div>
                    </div>

                    <hr />

                    <div className="flex mt-8 py-4 px-3 sm:px-12 sm:justify-evenly justify-between">
                        <div>
                            <h1 className="font-semibold text-2xl">Tika</h1>
                            <h2 className="text-xl">Software Engineer</h2>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl">Projects</h1>
                            {data.repos
                                .filter((it) =>
                                    config.footer_projects.includes(
                                        it.name.toLowerCase()
                                    )
                                )
                                .map((it, i) => (
                                    <span
                                        key={i}
                                        className="hover:text-theme transition duration-100 cursor-pointer text-lg"
                                    >
                                        {it.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                </>
            ) : (
                <Loader type="ripple" color="#aaaa" />
            )}
        </div>
    );
}
