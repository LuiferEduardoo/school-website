import { useContext } from "react";
import { ScheduleContext } from "../..";
import EditOrCreate from "./EditOrCreate";
import ReadOnly from "./ReadOnly";

const Events = () => {
    const {isReadOnly} = useContext(ScheduleContext)

    return (
        <>
            {isReadOnly ? (
                <ReadOnly />
            ) : (
                <EditOrCreate />
            )}
        </>
    );
}

export default Events;