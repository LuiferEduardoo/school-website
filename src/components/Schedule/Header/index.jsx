import { useContext } from "react";
import { ScheduleContext } from "..";
import ButtonAddAndCreate from "./ButtonAddAndCreate";
import Selects from "./Selects";

const Header = () => {
    const {isReadOnly} = useContext(ScheduleContext);
    return (
        <header className="flex flex-col gap-4 mb-4 sm:flex-row justify-between">
            <Selects />
            {!isReadOnly && (
                <ButtonAddAndCreate />
            )}
        </header>
    )
}

export default Header