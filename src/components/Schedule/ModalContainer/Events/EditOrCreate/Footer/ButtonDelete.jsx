import { useState, useContext } from "react";
import { Button } from "@nextui-org/react";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { ScheduleContext } from "./../../../../";
import { deleteSchedule } from "../../../../../../services/schedule.service";
import { toast } from "sonner";

const ButtonDelete = (props) => {
    const { setUpdatePageSchedule, onClose, setIdScheduleSelect} = useContext(ScheduleContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);

    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const handleDelete = async () => {
        event.preventDefault();
        setIsLoadingButton(true);
        try{
            await deleteSchedule(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id);
            toast.success('Evento borrado con exito');
            onClose();
            setIdScheduleSelect();
            setUpdatePageSchedule(true);
        } catch(error){
            toast.warning(error.message);
        } finally {
            setIsLoadingButton(false);
        }
    }
    return (
        <>
            <Button 
                isLoading={isLoadingButton} 
                onPress={handleDelete}
                color="danger" 
                variant="flat"
            >
                Borrar
            </Button>
        </>
    )
}

export default ButtonDelete