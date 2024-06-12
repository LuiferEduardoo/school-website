import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import {useDisclosure} from "@nextui-org/react";
import Modal from "./Modal";
import { getAdmissionStatus } from "../../../services/admissionRequest.service";

const Form = () => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [admissionStatus, setAdmissionStatus] = useState({});
    const [notFound, setNotFound] = useState(false);

    const {isOpen, onOpen, onClose} = useDisclosure();

    const getStatus = async () => {
        event.preventDefault();
        setIsLoading(true);
        try{
            const response = await getAdmissionStatus(value);
            setAdmissionStatus(response.status);
            setNotFound(false)
        } catch(error){
            if(error.response.status === 404){
                setNotFound(true);
            }
        } finally{
            setIsLoading(false);
            onOpen();
        }
    }
    
    return (
        <form onSubmit={getStatus} className="flex flex-col gap-5 lg:flex-row lg:items-center lg:pb-10">
            <Input 
                required
                variant="bordered"
                label="Numero de documento"
                value={value}
                onValueChange={setValue}
            />
            <Button
                isDisabled={value.length < 5}
                type="submit"
                color="primary"
                isLoading={isLoading}
            >
                Consultar
            </Button>
            <Modal 
                isOpen={isOpen}
                onClose={onClose}
                numberDocument={value}
                notFound={notFound}
                status={admissionStatus}
            />
        </form>
    );
};

export default Form;
