import { useContext } from "react";
import {Button} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { CalendarContext } from "..";

const ButtonAdd = () => {
    const {isReadOnly, setIdSelectEvent, onOpen} = useContext(CalendarContext);

    const handleAddEvent = async () => {
        setIdSelectEvent();
        onOpen();
    }
    return (
        !isReadOnly && (
            <section className="flex justify-end mb-4">
                <Button color="primary" startContent={<FaPlus/>} onPress={handleAddEvent}>
                    Agregar 
                </Button>
            </section>
        )
    )
}

export default ButtonAdd