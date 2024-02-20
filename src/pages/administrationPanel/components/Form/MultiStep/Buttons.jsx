import {Button} from "@nextui-org/react";
import Buttons from "../Buttons";

const ButtonsComponent = (props) => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                {props.step !== 1 && <Button color="primary" variant="ghost" onPress={props.handlePrev} >Atras</Button>}
                {props.step !== props.fields.length && <Button color="primary" isDisabled={props.isDisabledNext}  variant="flat" onPress={props.handleNext}>Siguiente</Button>}
            </div>
            <div>
                {props.step === props.fields.length && <Buttons onOpen={props.onOpen} isDisabledAction={props.isDisabledAction} edit={props.edit} handleAction={props.handleAction} />}
            </div>
        </div>
    )
}

export default ButtonsComponent