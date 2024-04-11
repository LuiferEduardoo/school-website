import { useContext } from "react";
import { Button } from "@nextui-org/react";
import { ViewContext } from "..";

const ButtonCreate = () => {
    const { handleCreate } = useContext(ViewContext)
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