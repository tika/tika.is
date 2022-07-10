import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Logo } from "../components/Logo";
import { NavItem } from "../components/NavItem";
import Status from "../components/Status";
import { useLanyard } from "react-use-lanyard";
import config from "../../tikac.json";

export default function PortfolioApp({ Component, pageProps }: AppProps) {
    const { loading: lanyardLoading, status } = useLanyard({
        userId: config.discord_id,
        socket: true,
    });

    return (
        <div className="py-5 px-0 md:px-32 lg:px-64">
            <div className="flex h-16 justify-between">
                <div className="flex gap-10 items-center">
                    <Logo />
                    <div className="flex gap-5">
                        <NavItem destination="/">home</NavItem>
                        <NavItem>contact</NavItem>
                        <NavItem>about</NavItem>
                        <NavItem destination="/projects">projects</NavItem>
                    </div>
                </div>
                <Status lanyard={status} />
            </div>
            <Component {...pageProps} />
        </div>
    );
}
