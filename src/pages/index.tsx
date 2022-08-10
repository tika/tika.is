import { useRef } from "react";
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
import Loader from "react-ts-loaders/dist/index";
import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "../components/Title";
import { CrucialData } from "../lib/portfolio";

export default function Home({
    className,
    navHeight,
    data,
}: {
    className: string;
    navHeight: number;
    data: CrucialData;
}) {
    const next = useRef<HTMLDivElement | null>(null);

    console.log(data);

    return (
        <>
            <Title text="TIKA" />
            <div className={className}>
                {data ? (
                    <>
                        <div
                            style={{
                                height: "calc(100vh - (0.25rem * 40))",
                            }}
                            className="relative py-16 flex flex-col justify-between"
                        >
                            <motion.div
                                animate={{ y: [15, -10, 15] }}
                                transition={{
                                    duration: 5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                }}
                                className="absolute w-1/2 bottom-40 sm:bottom-10 rotate-12 left-16 sm:left-16 sm:w-1/2 select-none"
                            >
                                <Image
                                    src="/Rings clay.png"
                                    className="object-scale-down opacity-50"
                                    draggable="false"
                                    alt="Planet 1"
                                    width="500px"
                                    height="500px"
                                    style={{
                                        filter: "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(146deg) saturate(600%) contrast(0.8)",
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                animate={{ y: [15, 0, 15] }}
                                transition={{
                                    duration: 10,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                }}
                                className="absolute w-2/6 top-8 right-8 sm:right-16 sm:w-1/4 select-none"
                            >
                                <Image
                                    src="/Marshmallow clay.png"
                                    className="object-scale-down opacity-50"
                                    draggable="false"
                                    alt="Planet 2"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        filter: "grayscale(100%) brightness(50%) sepia(100%) hue-rotate(146deg) saturate(600%) contrast(0.8)",
                                    }}
                                />
                            </motion.div>

                            <div className="text-black h-full flex flex-col justify-center items-center">
                                <div className="flex">
                                    <h1 className="text-9xl font-bold">TIKA</h1>

                                    <Link
                                        href="https://earth.google.com/web/search/Earth"
                                        className="rounded-full drop-shadow-lg font-semibold text-xs"
                                    >
                                        <div className="h-8 flex justify-center items-center gap-2 hover:opacity-50 cursor-pointer z-20 bg-white rounded-full px-2 shadow-md bg-gradient-to-r from-theme to-blue-500 text-white">
                                            <HiLocationMarker className="text-white" />
                                            Ea.
                                        </div>
                                    </Link>
                                </div>
                                <h2 className="text-2xl">Software Engineer</h2>
                            </div>

                            <div className="absolute bottom-0 left-1/2">
                                <div
                                    onClick={() => {
                                        if (!next.current) return;
                                        window.scrollTo({
                                            top:
                                                next.current.offsetTop -
                                                navHeight -
                                                30,
                                        });
                                    }}
                                    className="w-8 h-8 shadow-lg border-theme border-4 rounded-full cursor-pointer"
                                />
                            </div>
                        </div>

                        <div ref={next} className="my-24">
                            <h1 className="text-3xl font-semibold">Projects</h1>
                            <h2>
                                Primarily focused on web development, I&apos;ve
                                crafted private & public repositories on{" "}
                                <Link href="https://github.com/tika/">
                                    <a className="underline cursor-pointer hover:text-theme">
                                        my GitHub
                                    </a>
                                </Link>
                                . I primarily use GitHub to keep a backup for my
                                code, and since it&apos;s hosted on the cloud, I
                                can share it with others. I&apos;m interested in
                                open sourcing and would like to be involved in
                                more open source projects in the future.
                                <br />
                                <br />
                                Below is a list of a few projects. While not
                                exhaustive, these are a few of my favourites.
                                You can find write ups on projects{" "}
                                <Link href="/projects">
                                    <a className="underline cursor-pointer hover:text-theme">
                                        here
                                    </a>
                                </Link>
                                .
                            </h2>
                            <div className="flex flex-col gap-2 mt-8">
                                {data.pinned.map((it, i) => (
                                    <ListProjectItem
                                        key={it.url}
                                        project={it}
                                        destination={it.url}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="my-24">
                            <h1 className="text-3xl font-semibold">
                                Technologies
                            </h1>
                            <h2>
                                I&apos;m always looking to incorporate new
                                technologies into my projects, as they improve
                                on the efficiency and optimisation for the
                                modern program.
                            </h2>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                                <Technology
                                    name="Typescript"
                                    icon={SiTypescript}
                                />
                                <Technology name="Python" icon={SiPython} />
                                <Technology name="Java" icon={SiJava} />
                                <Technology name="Yarn" icon={SiYarn} />
                                <Technology name="Gradle" icon={SiGradle} />
                                <Technology name="Next.js" icon={SiNextdotjs} />
                                <Technology name="React" icon={SiReact} />
                                <Technology
                                    name="PostgreSQL"
                                    icon={SiPostgresql}
                                />
                                <Technology name="MongoDB" icon={SiMongodb} />
                                <Technology name="Prisma" icon={SiPrisma} />
                                <Technology name="Firebase" icon={SiFirebase} />
                                <Technology
                                    name="Amazon S3"
                                    icon={SiAmazons3}
                                />
                                <Technology name="Redis" icon={SiRedis} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        style={{
                            height: "calc(100vh - (0.25rem * 40))",
                        }}
                        className="relative py-16 w-full flex items-center justify-center"
                    >
                        <Loader type="ripple" color="#aaaa" />
                    </div>
                )}
            </div>
        </>
    );
}
