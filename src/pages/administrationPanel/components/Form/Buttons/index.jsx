import { Button } from "@nextui-org/react";

const Buttons = (props) => {
    return (
        <div className="flex gap-4">
            <Button variant="flat" onPress={props.onOpen}>Previsualizar</Button>
            <Button color="primary" isDisabled={props.isDisabledAction} onPress={props.handleAction}>{props.edit ? 'Editar' : 'Crear'}</Button>
        </div>
    )
}

export default Buttons