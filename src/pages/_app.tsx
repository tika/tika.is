import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Logo } from "../components/Logo";
import { NavItem } from "../components/NavItem";
import Status from "../components/Status";
import { useLanyard } from "react-use-lanyard";
import config from "../../tikac.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavMenuItem } from "../components/NavMenuItem";

export default function PortfolioApp({ Component, pageProps }: AppProps) {
    const { loading: lanyardLoading, status } = useLanyard({
        userId: config.discord_id,
        socket: true,
    });
    const [hamburgerOpened, setHamburgerOpened] = useState(false);

    const bigNav =
        "font-medium text-lg py-4 px-6 cursor-pointer rounded hover:bg-gray-100 hover:text-theme transistion duration-150";

    return (
        <>
            {hamburgerOpened ? (
                <div className="px-6 py-5 flex flex-col justify-between h-screen">
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
                            {/* <NavItem
                                className={bigNav}
                                onClick={() => setHamburgerOpened(false)}
                                destination="/"
                                selected={router.asPath === ""}
                            >
                                home
                            </NavItem> */}
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
                <div className="py-5 px-6 md:px-20 xl:px-64">
                    <div className="flex h-16 justify-between">
                        <div className="flex sm:gap-10 sm:justify-start justify-between items-center w-full">
                            <Logo className="h-16 w-16" />
                            <div className="hidden sm:flex items-center gap-5">
                                <NavItem destination="/">home</NavItem>
                                <NavItem>contact</NavItem>
                                <NavItem>about</NavItem>
                                <NavItem destination="/projects">
                                    projects
                                </NavItem>
                            </div>
                            <div
                                className="p-2 bg-theme rounded cursor-pointer hover:shadow-xl duration-150 transition flex sm:hidden"
                                onClick={() =>
                                    setHamburgerOpened(!hamburgerOpened)
                                }
                            >
                                <GiHamburgerMenu className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="sm:flex hidden w-64">
                            <Status lanyard={status} />
                        </div>
                    </div>
                    <Component {...pageProps} />
                </div>
            )}
        </>
    );
}
