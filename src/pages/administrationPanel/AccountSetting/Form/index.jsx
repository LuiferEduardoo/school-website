import { useState, useContext, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";
import { AuthContext } from "../../../../providers/AuthContext";
import { updateUser } from "../../../../services/user.service";
import { toast } from "sonner";
import verifyIfDataIsDiferente from "../../../../utils/verifyIfDataIsDiferente";
import PersonalDetails from "./PersonalDetails";
import PasswordContent from "./Password";

const Form = () => {
    const { userInformation, setUpdateAllPage } = useContext(AdministrationsPanelContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [name, setName] = useState(userInformation?.name);
    const [lastName, setLastName] = useState(userInformation?.lastName);
    const [email, setEmail] = useState(userInformation?.email);
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repliteNewPassword, setRepliteNewPassword] = useState();
    const [closeOtherDevices, setCloseOtherDevices] = useState(false)

    const [dataToUpdate, setDataToUpdate] = useState({});
    const [isLoadingButton, setIsLoadingButton] = useState(false);
    const [isDifferent, setIsDifferent] = useState(false);
    const [errorNewPassword, setErrorNewPassword] = useState({
        error: false,
        message: '',
    });
    const [errorRepliteNewPassword, setErrorRepliteNewPassword] = useState({
            error: false,
            message: '',
        }
    );
    const [emailError, setEmailError] = useState();

    const isFormValid = isDifferent && !emailError && !errorRepliteNewPassword.error && !errorNewPassword.error;

    useEffect(() => {
        let verifyDataToUpdate = verifyIfDataIsDiferente([
            {ancientElement: userInformation?.name, recentElement: name, nameField: 'name'}, 
            {ancientElement: userInformation?.lastName, recentElement: lastName, nameField: 'lastName'},
            {ancientElement: userInformation?.email, recentElement: email, nameField: 'email'},
        ], setIsDifferent);;

        if(currentPassword && newPassword && repliteNewPassword && !errorNewPassword.error && !errorRepliteNewPassword.error){
            verifyDataToUpdate = {
                ...verifyDataToUpdate, 
                currentPassword,
                password: repliteNewPassword,
                closeOtherDevices
            }
            setIsDifferent(true);
        } else {
            delete verifyDataToUpdate?.currentPassword;
            delete verifyDataToUpdate?.password;
            delete verifyDataToUpdate?.closeOtherDevices;
            setDataToUpdate({...dataToUpdate});
        }

        setDataToUpdate(verifyDataToUpdate);
    }, [name, userInformation?.name, lastName, userInformation?.lastName, email, userInformation?.email, newPassword, repliteNewPassword, currentPassword, closeOtherDevices, errorNewPassword, errorRepliteNewPassword]);

    const handleAction = async() => {
        event.preventDefault();
        try{
            setIsLoadingButton(true)
            const response = await updateUser(accessToken, setAccessToken, refreshToken, setRefreshToken, null, dataToUpdate);
            setCurrentPassword('');
            setNewPassword('');
            setRepliteNewPassword('');
            setCloseOtherDevices(false);
            toast.success(response.message);
            setUpdateAllPage(true);
        }catch(error){
            toast.warning(error.response.data.message);
        } finally{
            setIsLoadingButton(false);
        }
    }

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 rounded-xl gap-6 p-5 bg-white mt-10" onSubmit={handleAction}>
            <PersonalDetails 
                name={name}
                setName={setName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                setEmailError={setEmailError}
            />
            <PasswordContent 
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                repliteNewPassword={repliteNewPassword}
                setRepliteNewPassword={setRepliteNewPassword}
                currentPassword={currentPassword}
                setCurrentPassword={setCurrentPassword}
                errorNewPassword={errorNewPassword}
                setErrorNewPassword={setErrorNewPassword}
                errorRepliteNewPassword={errorRepliteNewPassword}
                setErrorRepliteNewPassword={setErrorRepliteNewPassword}
                closeOtherDevices={closeOtherDevices}
                setCloseOtherDevices={setCloseOtherDevices}
            />
            <div className="md:col-span-2 flex justify-end">
                <Button
                    type="submit"
                    isDisabled={!isFormValid}
                    isLoading={isLoadingButton}
                    color="primary"
                    size="md"
                >
                    Editar
                </Button>
            </div>
        </form>
    )
}

export default Form