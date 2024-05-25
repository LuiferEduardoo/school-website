import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { ScheduleContext } from "./../../../../";
import { postSchedule, updateSchedule } from "../../../../../../services/schedule.service";
import verifyIfDataIsDiferente from "../../../../../../utils/verifyIfDataIsDiferente";
import {Button} from "@nextui-org/react";
import moment from "moment";
import { toast } from "sonner";

const ButtonSave = (props) => {
    const { setUpdatePageSchedule, onClose, course, setIdScheduleSelect } = useContext(ScheduleContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);

    const [dataToUpdate, setDataToUpdate] = useState(false);

    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const convertDateToHour = (date) => {
        return  moment(date).format('HH:mm')
    }

    useEffect(() => {
        if(props.id){
            const verifyDataToUpdate = verifyIfDataIsDiferente([
                {ancientElement: props.schedule.subjectId, recentElement: [...props.subject][0], nameField: 'subjectId'}, 
                {ancientElement: props.schedule.dayWeek, recentElement: [...props.dayWeek][0], nameField: 'dayWeek'},
                {ancientElement: convertDateToHour(props.schedule.startTime) , recentElement: convertDateToHour(props.startTime), nameField: 'startTime'},
                {ancientElement: convertDateToHour(props.schedule.endTime) , recentElement: convertDateToHour(props.endTime), nameField: 'endTime'}
            ], props.setIsDifferent)
            setDataToUpdate(verifyDataToUpdate);
        }
    }, [props.subject, props.dayWeek, props.startTime, props.endTime]); 

    const handleAction = async () => {
        event.preventDefault();
        setIsLoadingButton(true);
        try {
            let response;
            if(props.id){
                const {message} = await updateSchedule(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, dataToUpdate);
                response = message;
            } else {
                const {message} = await postSchedule(accessToken, setAccessToken, refreshToken, setRefreshToken, [...course][0], {
                    subjectId: [...props.subject][0],
                    dayWeek: [...props.dayWeek][0],
                    startTime: moment(props.startTime).format('HH:mm'),
                    endTime: moment(props.endTime).format('HH:mm')
                });
                response = message;
                setIdScheduleSelect()
            }
            toast.success(response);
            onClose();
            setUpdatePageSchedule(true);
        } catch(error){
            toast.warning(error.message);
            console.error(error)
        } finally{
            setIsLoadingButton(false);
        }
    }
    return (
        <Button color="primary" onPress={handleAction} isLoading={isLoadingButton} isDisabled={props.isDisabled}>
            Guardar
        </Button>
    )
}

export default ButtonSave