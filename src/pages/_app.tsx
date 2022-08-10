import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Logo } from "../components/Logo";
import { NavItem } from "../components/NavItem";
import Status from "../components/Status";
import config from "../../tikac.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { NavMenuItem } from "../components/NavMenuItem";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default function PortfolioApp({ Component, pageProps }: AppProps) {
    const { data, error } = useSWR<CrucialData>("/api/crucial", fetcher);

    const [hamburgerOpened, setHamburgerOpened] = useState(false);
    const [atTop, setAtTop] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const onScroll = () => setAtTop(window.pageYOffset === 0);
        window.document.addEventListener("scroll", onScroll);
        return () => window.document.removeEventListener("scroll", onScroll);
    }, []);

    if (error) {
        return (
            <h1>
                {error.name} - {error.message}
            </h1>
        );
    }

    return (
        <SWRConfig value={{ fetcher }}>
            {hamburgerOpened ? (
                <div
                    className={`px-6 py-5 flex flex-col justify-between h-screen`}
                >
                    <div>
                        <div className="flex items-center justify-between">
                            <Logo className="h-16 w-16" />
                            <h1 className="text-center font-semibold text-xl">
                                Navigation
                            </h1>
                            <div
                                className="cursor-pointer rounded bg-black p-2 hover:shadow-xl duration-150 transition"
                                onClick={() =>
                                    setHamburgerOpened(!hamburgerOpened)
                                }
                            >
                                <AiOutlineClose className="w-6 h-6 text-white " />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-8">
                            <NavMenuItem
                                destination="/"
                                onClick={() => setHamburgerOpened(false)}
                                name="home"
                            />
                            <NavMenuItem
                                destination="/about"
                                onClick={() => setHamburgerOpened(false)}
                                name="about"
                                extra="more about me outside programming"
                            />
                            <NavMenuItem
                                destination="/contact"
                                onClick={() => setHamburgerOpened(false)}
                                name="contact"
                                extra="contact info."
                            />
                            <NavMenuItem
                                destination="/projects"
                                onClick={() => setHamburgerOpened(false)}
                                name="projects"
                                extra="stuff i've worked on"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <hr />
                        <div className="flex items-end justify-between">
                            <div>
                                <h1 className="text-xl font-medium">Tika</h1>
                                <h1 className="text-lg">Software Developer</h1>
                            </div>

                            <p className="animate-chroma">Made by tika, 2022</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen">
                    <div className="flex flex-col min-h-screen overflow-hidden">
                        <header
                            className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out ${
                                !atTop &&
                                "bg-white backdrop-blur shadow-lg opacity-95"
                            }`}
                            ref={navRef}
                        >
                            <div className="py-4 px-6 md:px-20 xl:px-64">
                                <div className="flex h-16 justify-between">
                                    <div className="flex sm:gap-10 sm:justify-start justify-between items-center w-full">
                                        <Logo className="h-16 w-16" />
                                        <div className="hidden sm:flex items-center gap-5">
                                            <NavItem destination="/">
                                                home
                                            </NavItem>
                                            <NavItem destination="/contact">
                                                contact
                                            </NavItem>
                                            <NavItem destination="/about">
                                                about
                                            </NavItem>
                                            <NavItem destination="/projects">
                                                projects
                                            </NavItem>
                                        </div>
                                        <div
                                            className="p-2 bg-theme rounded cursor-pointer hover:shadow-xl duration-150 transition flex sm:hidden"
                                            onClick={() =>
                                                setHamburgerOpened(
                                                    !hamburgerOpened
                                                )
                                            }
                                        >
                                            <GiHamburgerMenu className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="sm:flex hidden min-w-max">
                                        <Status />
                                    </div>
                                </div>
                            </div>
                        </header>
                        <Component
                            className="px-6 md:px-20 xl:px-64 mt-24"
                            navHeight={
                                navRef.current
                                    ? navRef.current.clientHeight
                                    : 100
                            }
                            data={data}
                            {...pageProps}
                        />
                    </div>
                    <div className="mt-8 py-4 px-3 sm:px-12">
                        <hr />
                        <div className="flex py-4 sm:justify-evenly justify-between">
                            <div>
                                <h1 className="font-semibold text-2xl">Tika</h1>
                                <h2 className="text-xl">Software Engineer</h2>
                            </div>
                            <div>
                                <h1 className="font-semibold text-2xl">
                                    Projects
                                </h1>
                                {data?.repos
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
                    </div>
                </div>
            )}
        </SWRConfig>
    );
}
