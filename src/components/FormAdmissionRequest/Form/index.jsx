import React, { useState, createContext } from "react";
import moment from "moment";
import MultiStep from "../../../pages/administrationPanel/components/Form/MultiStep";
import AcademicInformation from "./AcademicInformation";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import { postAdmissionRequest } from "../../../services/admissionRequest.service";
import { toast } from "sonner";
import { useDisclosure } from "@nextui-org/react";
import Modal from "./Modal"

export const FormContext = createContext();

const Form = (props) => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false)
    const [academicLevels, setAcademicLevels] = useState('');
    const [grade, setGrade] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [surname, setSurname] = useState('');
    const [secondSurname, setSecondSurname] = useState('');
    const [gender, setGender] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [numberDocument, setNumberDocument] = useState();
    const [birthdate, setBirthdate] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');

    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const [isDisabledAction, setIsDisabledAction] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const fields = [
        {
            name: 'Información acedemica',
            component: <AcademicInformation/>
        }, 
        {
            name: "Información personal",
            component: <PersonalInformation />
        },
        {
            name: "Información de contacto",
            component: <ContactInformation />
        }
    ];

    const handleAction = async () => {
        try {
            setIsLoading(true);
            let data = {
                academicLevel: academicLevels,
                grade: grade,
                firstName,
                surname,
                secondSurname,
                birthdate: moment(birthdate).format('YYYY-MM-DD'),
                gender: gender,
                documentType: documentType,
                numberDocument,
                phoneNumber,
                email,
            }
            if(secondName){
                data.secondName = secondName;
            } 
            await postAdmissionRequest(data);
            onOpen();
            setStep(1);

            setAcademicLevels('');
            setGrade('');
            setFirstName('');
            setSecondName('');
            setSurname('');
            setSecondSurname('');
            setDocumentType('');
            setNumberDocument('');
            setGender('');
            setBirthdate('');
            setPhoneNumber('');
            setEmail('');
            
        }  catch(error){
            toast.warning(`No se pudo enviar la solicitud error ${error.response.status}`)
        } finally {
            setIsLoading(false);
        }
    }

    const handleCloseModals = () => {
        onClose();
        props.onClose()
    }

    return (
        <FormContext.Provider value={{
            academicLevels,
            setAcademicLevels,
            grade,
            setGrade,
            firstName, 
            setFirstName,
            secondName, 
            setSecondName,
            surname, 
            setSurname,
            secondSurname, 
            setSecondSurname,
            documentType, 
            setDocumentType,
            numberDocument, 
            setNumberDocument,
            gender, 
            setGender,
            birthdate, 
            setBirthdate,
            phoneNumber,
            setPhoneNumber,
            email, 
            setEmail,
            phoneNumberError, 
            setPhoneNumberError,
            emailError, 
            setEmailError,
            setIsLoading: setIsLoading,
            isDisabledNext: isDisabledNext,
            setIsDisabledNext: setIsDisabledNext,
            isDisabledAction: isDisabledAction,
            setIsDisabledAction: setIsDisabledAction
        }}> 
            <MultiStep
                fields={fields}
                onOpen={props.onOpen}
                isDisabledNext={isDisabledNext}
                isDisabledAction={isDisabledAction}
                handleAction={handleAction}
                isLoading={isLoading}
                step={step}
                setStep={setStep}
                style="flex flex-col gap-4"
            />
            <Modal
                title="¡Gracias por elegirnos!"
                isOpen={isOpen}
                onClose={onClose}
                close
                handleClose={handleCloseModals}
            >
                <section className="space-y-6 text-gray-500">
                    <p>¡Tu solicitud de admisión ha sido enviada con éxito!</p>
                    <p>Nos emociona que desees formar parte de nuestra escuela. Nos pondremos en contacto contigo pronto para continuar con el proceso de admisión.</p>
                </section>
            </Modal>
        </FormContext.Provider>
    )

};

export default Form
