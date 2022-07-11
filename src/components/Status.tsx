import { LanyardData } from "react-use-lanyard";
import { StatusItem } from "./StatusItem";
import config from "../../tikac.json";
import { SiSpotify, SiVisualstudiocode, SiZeromq } from "react-icons/si";

interface StatusProps {
    lanyard: LanyardData | undefined;
}

export default function Status(props: StatusProps) {
    const status = props.lanyard;

    if (!status || !status.activities || status.activities.length === 0) {
        return <StatusItem text={config.inactive_text} icon={SiZeromq} />;
    }

    const { name, details, assets, application_id, ...rest } =
        status.activities[0];

    if (assets && application_id) {
        const { name: heading, details: text } = getText({ name, details });

        return <StatusItem text={text} icon={SiVisualstudiocode} />;
    }

    if (status.spotify) {
        return (
            <StatusItem
                text={`listening to ${status.spotify.artist.split(";")[0]}`}
                icon={SiSpotify}
            />
        );
    }

    return <StatusItem text={config.inactive_text} icon={SiZeromq} />;
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
