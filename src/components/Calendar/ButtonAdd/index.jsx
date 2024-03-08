import {Button} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";

const ButtonAdd = ({onOpen}) => {
    return (
        <section className="flex justify-end mb-4">
            <Button color="primary" startContent={<FaPlus/>} onPress={onOpen}>
                Agregar 
            </Button>
        </section>
    )
}

export default ButtonAdd