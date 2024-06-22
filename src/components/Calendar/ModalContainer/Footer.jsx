import { useState, useEffect, useContext } from "react";
import { CalendarContext } from "..";
import { AuthContext } from "../../../providers/AuthContext";
import verifyIfDataIsDiferente from "../../../utils/verifyIfDataIsDiferente"
import { postCalendar, updateCalendar, deleteCalendar } from "../../../services/calendar.service";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";

const Footer = (props) => {
  const {isReadOnly, idSelectEvent, setIdSelectEvent, setSelectCalendar, isDisable, setIsDisabled, setIsUpdatePageCalendar, onClose} = useContext(CalendarContext);

  const authContext = useContext(AuthContext);

    const {
      accessToken = null,
      setAccessToken = null,
      refreshToken = null,
      setRefreshToken = null
    } = authContext || {};

  const [dataToUpdate, setDataToUpdate] = useState(false);
  const [isDifferent, setIsDifferent] = useState(false);

  const [isLoadingButtonAction, setIsLoadingButtonAction] = useState(false);
  const [isLoadingButtonDelete, setIsLoadingButtonDelete] = useState(false)

  useEffect(() => {
    const isEmpyte = !props.currentTitle || !props.currentDescription || !props.currentStart || props.error || props.isLoading;
    let disable;
    if(idSelectEvent){
      const verifyDataToUpdate = verifyIfDataIsDiferente([
        {ancientElement: props.ancientTitle, recentElement: props.currentTitle, nameField: 'title'}, 
        {ancientElement: props.ancientDescription , recentElement: props.currentDescription, nameField: 'description'},
        {ancientElement: props.ancientStart, recentElement: props.currentStart, nameField: 'startDate'},
        {ancientElement: props.ancientEnd, recentElement: props.currentEnd, nameField: 'endDate'},
        {ancientElement: props.ancientVisible, recentElement: props.currentVisible, nameField: 'visible'}
    ], setIsDifferent);

    setDataToUpdate(verifyDataToUpdate);
      disable = isEmpyte && !isDifferent;
    } else {
      disable = isEmpyte;
    }
    setIsDisabled(disable);
  }, [
    props.currentTitle, props.ancientTitle, 
    props.currentDescription, props.ancientDescription, 
    props.currentStart, props.ancientStart,
    props.currentEnd, props.ancientEnd, 
    props.error]);

  const handleAction = async () => {
    try {
      setIsLoadingButtonAction(true);
      let response;
      if(idSelectEvent){
        response = await updateCalendar(accessToken, setAccessToken, refreshToken, setRefreshToken, idSelectEvent, dataToUpdate);
      } else {
        let dataToCreate = {
          title: props.currentTitle,
          description: props.currentDescription,
          startDate: props.currentStart,
          endDate: props.currentEnd
        }
        if(props.description){
          dataToCreate.description = props.description
        }
        response = await postCalendar(accessToken, setAccessToken, refreshToken, setRefreshToken, dataToCreate);
      } 
      toast.success(response.message);
      setIdSelectEvent();
      onClose();
      setSelectCalendar();
      setIsUpdatePageCalendar(true);
    } catch(error){
      toast.warning(error);
    }
  }

  const handleDelete = async() => {
      try {
        setIsLoadingButtonDelete(true);
        const response = await deleteCalendar(accessToken, setAccessToken, refreshToken, setRefreshToken, idSelectEvent);
        toast.success(response.message);
        onClose();
        setSelectCalendar();
        setIdSelectEvent();
        setIsUpdatePageCalendar(true);
      } catch(error){
        toast.warning(error);
      }
  }
  return (
    <>
      <Button color="danger" variant="light" onPress={onClose}>
        Cerrar
      </Button>
      {!isReadOnly && (
        <>
            {idSelectEvent && (
                <Button 
                  color="danger" 
                  variant="flat" 
                  onPress={handleDelete} 
                  isDisabled={props.isLoading}
                  isLoading={isLoadingButtonDelete}
                >
                    Borrar
                </Button>
            )}
            <Button
                color="primary"
                isLoading={isLoadingButtonAction}
                onPress={handleAction}
                isDisabled={isDisable}
            >
                Guardar
            </Button> 
        </>
        )}
    </>
  );
};

export default Footer
