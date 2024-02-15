import { Button } from "@nextui-org/react";

const ButtonCreate = ({handleCreate}) => {
    return (
        <>
            <div className="flex justify-end mb-4">
                <Button color="primary" onClick={handleCreate}>
                    Crear
                </Button>
            </div>

        </>
    )
}

export default ButtonCreate