import { useState, useContext, useEffect } from "react";
import ElementEditAndCreate from "./ElementEditAndCreate";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getUsers, postUser, updateUser } from "../../../../../services/user.service";
import verifyIfDataIsDiferente from "../../../../../utils/verifyIfDataIsDiferente";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";

const FormContent = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [rol, setRol] = useState();
    const [password, setPassword] = useState('');
    const [dataUser, setDataUser] = useState('');
    const [active, setActive] = useState();
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [loadingPage, setIsLoadingPage] = useState(true);
    const [isLoadingButton, setIsLoadingButton] = useState(false);
    const [isDifferent, setIsDifferent] = useState(false);

    const [passwordError, setPasswordError] = useState({error: false, message: ''});
    const [emailError, setEmailError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);

    const isFormValid = props.elementEdit ? (isDifferent && !emailError) : (name && lastName && email && username && rol && password && !passwordError.error && !emailError && !userNameError);

    useEffect(()=> {
        const callAPI = async () => {
            if(props.elementEdit){
                setIsLoadingPage(true)
                try{
                    const response = await getUsers(accessToken, setAccessToken, refreshToken, setRefreshToken, null, props.elementEdit);
                    setEmail(response.email);
                    setRol(response.rol[0].rol);
                    setActive(response.active);
                    setDataUser(response)
                } catch(error){
                    props.onClose()
                } finally {
                    setIsLoadingPage(false)
                }
            }
        }
        callAPI()
    }, [props.elementEdit]);

    useEffect(() => {
        if(props.elementEdit){
            const verifyDataToUpdate = verifyIfDataIsDiferente([
                {ancientElement: dataUser?.email, recentElement: email, nameField: 'email'}, 
                {ancientElement: dataUser?.rol?.[0]?.rol, recentElement: rol, nameField: 'rol'},
                {ancientElement: dataUser?.active, recentElement: active, nameField: 'active'},
            ], setIsDifferent);
            setDataToUpdate(verifyDataToUpdate);
        }
    }, [email, rol, active]);

    const handleAction = async() => {
        event.preventDefault();
        try{
            setIsLoadingButton(true)
            let message;
            if(props.elementEdit){
                const response = await updateUser(accessToken, setAccessToken, refreshToken, setRefreshToken, props.elementEdit, dataToUpdate);
                message = response.message;
            } else {
                const response = await postUser(accessToken, setAccessToken, refreshToken, setRefreshToken, {
                    username,
                    name,
                    lastName,
                    email,
                    password,
                    rol
                });
                message = 'Usuario creado con exito';
            }
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
        <form className='grid grid-cols-1 gap-4 pt-6 px-4' onSubmit={handleAction}>
            <ElementEditAndCreate 
                elementEdit={props.elementEdit}
                loadingPage={loadingPage}
                name={name}
                setName={setName}
                lastName={lastName}
                setLastName={setLastName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                rol={rol}
                setRol={setRol}
                active={active}
                setActive={setActive}
                setPasswordError={setPasswordError}
                passwordError={passwordError}
                emailError={emailError}
                setEmailError={setEmailError}
                userNameError={userNameError} 
                setUserNameError={setUserNameError}
            />
            <Button
                type="submit"
                isDisabled={!isFormValid}
                isLoading={isLoadingButton}
                isDisable={loadingPage}
                color="primary"
                size="md"
                className="w-full"
            >
                {props.elementEdit ? 'Editar' : 'Crear'}
            </Button>
        </form>
    )
}

export default FormContent