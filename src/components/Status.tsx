import { useLanyard } from "use-lanyard";
import { StatusItem } from "./StatusItem";
import config from "../../portfolio-config.json";
import {
    SiDiscord,
    SiSpotify,
    SiVisualstudiocode,
    SiZeromq,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

const noStatus = <StatusItem text={config.inactive_text} icon={SiZeromq} />;

export default function Status() {
    const { data: activity } = useLanyard(config.discord_id);

    if (!activity || activity.activities.length === 0) return noStatus;

    const { name, details } = activity.activities[0];

    if (activity.spotify) {
        return (
            <StatusItem
                text={`listening to ${activity.spotify.artist.split(";")[0]}`}
                icon={SiSpotify}
                url={`https://open.spotify.com/track/${activity.spotify.track_id}`}
            />
        );
    }

    if (name) {
        const { details: text } = getText({ name, details });

        let icon: IconType | null = null;

        switch (name.toLowerCase()) {
            case "discord":
                icon = SiDiscord;
                break;
            case "code":
                icon = SiVisualstudiocode;
                break;
            default:
                icon = null;
                break;
        }

        return <StatusItem text={text} icon={icon} />;
    }

    return <StatusItem text={config.inactive_text} icon={SiZeromq} />;
}

type Info = {
    name: string;
    details?: string;
};

// formats stuff
function getText({ name, details }: Info): Info & { details: string } {
    return {
        name,
        details: details ?? `Using ${name}`,
    };
}
