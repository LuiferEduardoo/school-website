import {Button} from "@nextui-org/react";

const ButtonAddAndCreate = (props) => {
    const handleOnpress = (element) => {
        props.setClickButton(element)
        props.onOpen();
    }
    return (
        <section className='flex gap-2'>
            <Button color="primary" isDisabled={!props.academicLevel || !props.grade || !props.course} onPress={()=> handleOnpress('event')}>
                Agregar 
            </Button>
            <Button color="primary" isDisabled={!props.academicLevel} onPress={()=> handleOnpress('subject')}>
                Asignaturas 
            </Button>
        </section>
    )
}

export default ButtonAddAndCreate