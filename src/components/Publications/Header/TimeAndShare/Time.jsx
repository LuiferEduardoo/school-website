import { useContext } from "react";
import { PublicationsContext } from "../..";
import { FaReadme } from "react-icons/fa";
import formatDuration from "../../../../utils/formatDuration";

const Time = () => {
    const { timeDuration } = useContext(PublicationsContext);
    return (
        <span className="flex items-center gap-1">
            <FaReadme />
            {timeDuration
                ? formatDuration(timeDuration)
                : formatDuration("00:05:00")}
        </span>
    );
};

export default Time