import {Button} from "@nextui-org/react";

const ButtonSave = (props) => {
    return (
        <>
            <Button color="primary" onPress={props.onClose} isDisabled={props.isDisabled}>
                Guardar
            </Button>
        </>
    )
}

export default ButtonSave