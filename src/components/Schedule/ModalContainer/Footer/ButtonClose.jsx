import {Button} from "@nextui-org/react";

const ButtonClose = (props) => {
    return (
        <>
            <Button color="danger" variant="light" onPress={props.onClose}>
                Cerrar
            </Button>
        </>
    )
}

export default ButtonClose