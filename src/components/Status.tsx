import { useLanyard } from "use-lanyard";
import { StatusItem } from "./StatusItem";
import config from "../../portfolio-config.json";
import { SiSpotify, SiVisualstudiocode, SiZeromq } from "react-icons/si";

const noStatus = <StatusItem text={config.inactive_text} icon={SiZeromq} />;

export default function Status() {
    const { data: activity } = useLanyard(config.discord_id);

    if (!activity || activity.activities.length === 0) return noStatus;

    const { name, details } = activity.activities[0];

    if (name) {
        const { details: text } = getText({ name, details });

        return <StatusItem text={text} icon={SiVisualstudiocode} />;
    }

    if (activity.spotify) {
        return (
            <StatusItem
                text={`listening to ${activity.spotify.artist.split(";")[0]}`}
                icon={SiSpotify}
                url={`https://open.spotify.com/track/${activity.spotify.track_id}`}
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
            details: details ?? `Using ${name}`, // TODO
        };
    }

    const subheading = apps[0].subheading.replaceAll("%d", details ?? "");

    return {
        name: apps[0].heading,
        details: subheading,
    };
}
