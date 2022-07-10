import { Logo } from "../components/Logo";
import { NavItem } from "../components/NavItem";
import Status from "../components/Status";
import { useEffect, useRef, useState } from "react";
import { useLanyard } from "react-use-lanyard";
import config from "../../tikac.json";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import Technology from "../components/Technology";
import {
    SiAmazons3,
    SiFirebase,
    SiGradle,
    SiJava,
    SiJavascript,
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
import { ListProjectItem } from "../components/ListProjectItem";
import Link from "next/link.js";

interface Props {
    crucial: CrucialData;
}

export default function Home(props: Props) {
    const next = useRef<HTMLDivElement | null>(null);

    return (
        <div>
            <div
                style={{
                    height: "calc(100vh - (0.25rem * 40))",
                }}
                className="relative py-16 flex flex-col justify-between"
            >
                <div className="z-50 text-black h-full flex flex-col justify-center">
                    <div className="flex">
                        <h1 className="text-9xl font-bold">TIKA</h1>
                        <p className="bg-transparent rounded-full drop-shadow-lg w-8 h-8 flex justify-center items-center">
                            🪐
                        </p>
                    </div>
                    <h2 className="text-2xl">Software Engineer</h2>
                </div>

                <div className="absolute bottom-0 left-1/2">
                    <div
                        onClick={() =>
                            next.current && next.current.scrollIntoView()
                        }
                        className="w-8 h-8 border-theme border-4 rounded-full absolute cursor-pointer left-1/2"
                    />
                </div>
            </div>

            <div ref={next} className="my-24">
                <h1 className="text-3xl font-semibold">Projects</h1>
                <h2>
                    Primarily focused on web development, I&apos;ve crafted{" "}
                    {props.crucial.privateRepoCount} private &{" "}
                    {props.crucial.publicRepoCount} public repositories on{" "}
                    <Link
                        href="https://github.com/tika/"
                        className="underline cursor-pointer hover:text-theme"
                    >
                        my github
                    </Link>
                    . I primarily use GitHub to keep a backup for my code, and
                    since it&apos;s hosted on the cloud, I can share it with
                    others. I&apos;m interested in open sourcing and would like
                    to be involved in more open source projects in the future.
                    <br />
                    <br />
                    Below is a list of a few projects. While not exhaustive,
                    these are a few of my favourites. You can find write ups on
                    projects{" "}
                    <Link
                        href="/projects"
                        className="underline cursor-pointer hover:text-theme"
                    >
                        here
                    </Link>
                    .
                </h2>
            </div>

            <div className="my-24">
                <h1 className="text-3xl font-semibold">Technologies</h1>
                <h2>
                    I&apos;m always looking to incorporate new technologies into
                    my projects, as they improve on the efficiency and
                    optimisation for the modern program.
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
            <ListProjectItem project={props.crucial.repos[0]} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    const crucial: CrucialData = await axios
        .get(`http://${process.env.BASE_URL}/api/crucial`)
        .then(({ data }) => data);

    return {
        props: {
            crucial,
        },
    };
};
