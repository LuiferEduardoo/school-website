import { Button } from "@nextui-org/react";

const Buttons = ({onOpen}) => {
    return (
        <div className="flex gap-4">
            <Button onPress={onOpen}>Previsualizar</Button>
            <Button color="primary">Crear</Button>
        </div>
    )
}

export default Buttons