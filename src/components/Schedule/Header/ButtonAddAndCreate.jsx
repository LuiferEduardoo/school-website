import { useContext } from "react";
import { ScheduleContext } from "..";
import {Button} from "@nextui-org/react";

const ButtonAddAndCreate = () => {
    const {academicLevel, course, setClickButton, onOpen} = useContext(ScheduleContext);

    const handleOnpress = (element) => {
        setClickButton(element)
        onOpen();
    }
    return (
        <section className='flex gap-2'>
            <Button color="primary" isDisabled={academicLevel.size === 0 || course.size === 0} onPress={()=> handleOnpress('event')}>
                Agregar 
            </Button>
            <Button color="primary" isDisabled={academicLevel.size === 0} onPress={()=> handleOnpress('subject')}>
                Asignaturas 
            </Button>
        </section>
    )
}

export default ButtonAddAndCreate