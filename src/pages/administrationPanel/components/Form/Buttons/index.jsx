import { Button } from "@nextui-org/react";

const Buttons = (props) => {
    return (
        <div className="flex gap-4">
            {props.hasPreview && (
                <Button variant="flat" onPress={props.onOpen}>Previsualizar</Button>
            )}
            <Button 
                color="primary" 
                isDisabled={props.isDisabledAction} 
                isLoading={props.isLoading}
                onPress={props.handleAction}
            >
                {props.edit ? 'Editar' : 'Crear'}
            </Button>
        </div>
    )
}

export default Buttons