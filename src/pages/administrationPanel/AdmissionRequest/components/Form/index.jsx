import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getAdmissionRequest, updateAdmissionRequest } from './../../../../../services/admissionRequest.service.js'
import AcademicAndGrade from './AcademicAndGrade';
import PersonalInformation from "./PersonalInformation.jsx";
import ContactInformation from "./ContactInformation.jsx";
import verifyIfDataIsDiferente from "../../../../../utils/verifyIfDataIsDiferente.js";
import StatusAdmission from "./StatusAdmission.jsx";
import moment from 'moment';
import dateConvert from "../../../../../utils/dateConvert.js";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";

const FormContent = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);

    const [dateAdmissionRequest, setDateAdmissionRequest] = useState({})
    
    const [academicLevel, setAcademicLevel] = useState('');
    const [grade, setGrade] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [surname, setSurname] = useState('');
    const [secondSurname, setSecondSurname] = useState('');
    const [birthdate, setBirthdate] = useState();
    const [gender, setGender] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [numberDocument, setNumberDocument] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');
    const [statusAdmission, setStatusAdmission] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [isLoadingButton, setIsLoadingButton] = useState(false);
    const [isDifferent, setIsDifferent] = useState(false);
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    const isFormValid = isDifferent && !emailError && !phoneNumberError;

    useEffect(() => {
        const callAPI = async () => {
            try{
                setIsLoadingPage(true);
                const response  = await getAdmissionRequest(accessToken, setAccessToken, refreshToken, setRefreshToken, {}, props.id);
                setDateAdmissionRequest(response);
                setAcademicLevel(String(response?.academicLevel));
                setGrade(String(response?.grade));
                setFirstName(response?.firstName);
                setSecondName(response?.secondName);
                setSurname(response?.surname);
                setSecondSurname(response?.secondSurname);
                setBirthdate(dateConvert(response?.birthdate));
                setGender(response?.gender);
                setDocumentType(response?.documentType);
                setNumberDocument(response?.numberDocument);
                setPhoneNumber(response?.phoneNumber);
                setEmail(response?.email);
                setStatusAdmission(response?.status);
            } catch(error){
                props.onClose();
            } finally {
                setIsLoadingPage(false);
            }
        }
        callAPI()
    }, [props.id]);

    useEffect(() => {
        const verifyDataToUpdate = verifyIfDataIsDiferente([
            {ancientElement: dateAdmissionRequest?.academicLevel, recentElement: academicLevel, nameField: 'academicLevel'}, 
            {ancientElement: dateAdmissionRequest?.grade, recentElement: grade, nameField: 'grade'},
            {ancientElement: dateAdmissionRequest?.firstName, recentElement: firstName, nameField: 'firstName'},
            {ancientElement: dateAdmissionRequest?.secondName, recentElement: secondName, nameField: 'secondName', canBeEmpty: true},
            {ancientElement: dateAdmissionRequest?.surname, recentElement: surname, nameField: 'surname'},
            {ancientElement: dateAdmissionRequest?.secondSurname, recentElement: secondSurname, nameField: 'secondSurname', canBeEmpty: true},
            {ancientElement: dateConvert(dateAdmissionRequest?.birthdate), recentElement: moment(birthdate).format('YYYY-MM-DD'), nameField: 'birthdate'},
            {ancientElement: dateAdmissionRequest?.gender, recentElement: gender, nameField: 'gender'},
            {ancientElement: dateAdmissionRequest?.numberDocument, recentElement: numberDocument, nameField: 'numberDocument'},
            {ancientElement: dateAdmissionRequest?.documentType, recentElement: documentType, nameField: 'documentType'},
            {ancientElement: dateAdmissionRequest?.phoneNumber, recentElement: phoneNumber, nameField: 'phoneNumber'},
            {ancientElement: dateAdmissionRequest?.email, recentElement: email, nameField: 'email'},
            {ancientElement: dateAdmissionRequest?.status, recentElement: statusAdmission, nameField: 'status'},
        ], setIsDifferent);
        setDataToUpdate(verifyDataToUpdate);
    }, [academicLevel, grade, firstName, secondName, surname, secondSurname, birthdate, gender, documentType, numberDocument, phoneNumber, email, statusAdmission]);
    
    const handleAction = async() => {
        event.preventDefault();
        try{
            setIsLoadingButton(true)
            let message;
            const response = await updateAdmissionRequest(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, dataToUpdate);
            message = response.message;
            toast.success(message);
            props.onClose();
            props.setUpdatePage(true);
        }catch(error){
            toast.warning(error.message);
        } finally{
            setIsLoadingButton(false);
        }
    }

    return (
        <form className='grid grid-cols-1 gap-6 pt-6 px-4' onSubmit={handleAction}>
            <section className="flex flex-col md:flex-row gap-4">
                <AcademicAndGrade 
                    isLoadingPage={isLoadingPage}
                    academicLevel={academicLevel}
                    setAcademicLevel={setAcademicLevel}
                    grade={grade}
                    setGrade={setGrade}
                />
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                <PersonalInformation 
                    isLoadingPage={isLoadingPage}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    secondName={secondName}
                    setSecondName={setSecondName}
                    surname={surname}
                    setSurname={setSurname}
                    secondSurname={secondSurname}
                    setSecondSurname={setSecondSurname}
                    documentType={documentType}
                    setDocumentType={setDocumentType}
                    numberDocument={numberDocument}
                    setNumberDocument={setNumberDocument}
                    gender={gender}
                    setGender={setGender}
                    birthdate={birthdate}
                    setBirthdate={setBirthdate}
                />
            </section>
            <section className="flex flex-col md:flex-row gap-4">
                <ContactInformation 
                    isLoadingPage={isLoadingPage}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    phoneNumberError={phoneNumberError} 
                    setPhoneNumberError={setPhoneNumberError}
                    email={email}
                    setEmail={setEmail}
                    emailError={emailError}
                    setEmailError={setEmailError}
                />
            </section>
            <section>
                <StatusAdmission 
                    status={statusAdmission}
                    setStatus={setStatusAdmission}
                />
            </section>
            <Button
                type="submit"
                isDisabled={!isFormValid}
                isLoading={isLoadingButton}
                isDisable={isLoadingPage}
                color="primary"
                size="md"
                className="w-full"
            >
                Editar
            </Button>
        </form>
    )
}

export default FormContent