import { LanyardData, LanyardWebsocket, useLanyard } from "react-use-lanyard";
import { StatusItem } from "./StatusItem";
import config from "../../tikac.json";
import Loader from "react-ts-loaders/dist";

interface StatusProps {
    lanyard: LanyardData | undefined;
}

export default function Status(props: StatusProps) {
    const status = props.lanyard;

    if (!status || !status.activities || status.activities.length === 0) {
        return <StatusItem heading={config.inactive_text} subtext={""} />;
    }

    const { name, details, assets, application_id, ...rest } =
        status.activities[0];

    if (assets && application_id) {
        const { name: heading, details: subtext } = getText({ name, details });

        return (
            <StatusItem
                heading={heading}
                subtext={subtext}
                imageURL={getIconURL(application_id, assets.large_image)}
            />
        );
    }

    if (status.spotify) {
        return (
            <StatusItem
                heading={`listening to **Spotify**`}
                subtext={`${status.spotify.song} by ${status.spotify.artist}`}
                imageURL={status.spotify.album_art_url}
            />
        );
    }

    return <StatusItem heading={config.inactive_text} subtext={""} />;
}

type Info = {
    name: string;
    details?: string;
};

// formats stuff
function getText({ name, details }: Info): Info & { details: string } {
    const apps = config.apps.filter(
        (it) => it.app.toLowerCase() === name.toLowerCase()
    );

    // there are no configured apps with this name!
    if (apps.length === 0) {
        return {
            name,
            details: details ?? "", // TODO
        };
    }

    const subheading = apps[0].subheading.replaceAll("%d", details ?? "");

    return {
        name: apps[0].heading,
        details: subheading,
    };
}

function getIconURL(appId: string, assetId: string) {
    return `https://cdn.discordapp.com/app-assets/${appId}/${assetId}.png`;
}
