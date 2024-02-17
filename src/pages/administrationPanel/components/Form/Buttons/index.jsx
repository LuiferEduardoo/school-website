import { Button } from "@nextui-org/react";

const Buttons = ({onOpen, edit, handleAction}) => {
    return (
        <div className="flex gap-4">
            <Button onPress={onOpen}>Previsualizar</Button>
            <Button color="primary" onPress={handleAction}>{edit ? 'Editar' : 'Crear'}</Button>
        </div>
    )
}

export default Buttons