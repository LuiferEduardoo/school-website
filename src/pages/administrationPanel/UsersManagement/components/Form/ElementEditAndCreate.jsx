import { useState, useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getUsers } from "../../../../../services/user.service";
import {Input, Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { roles } from "./data";
import { Status } from "../../../components/Form";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import validatePassword from "../../../../../utils/validatePassword";
import validateEmail from "../../../../../utils/validateEmail";

const ElementEditAndCreate = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleUsername = async (value) => {
        props.setUsername(value);
        const data = value ? {search: value, limit: 1} : {limit: 1}
        let users = await getUsers(accessToken, setAccessToken, refreshToken, setRefreshToken, data);
        const username = users.elements.map(u => u?.username).filter(u => u === value);
        const containsSpaces = /\s/.test(value);
        if(username.length > 0 || containsSpaces){
            props.setUserNameError(true);
        } else {
            props.setUserNameError(false);
        }
    }

    const handleNewPasswordChange = (value) => {
        props.setPassword(value);
        props.setPasswordError({
            error: !validatePassword(value),
            message: validatePassword(value)
            ? ""
            : "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
        });
    };

    const handleEmail = (value) => {
        props.setEmail(value);
        props.setEmailError(!validateEmail(value));
    };

    return (
        props.elementEdit ? (
            <>
                <Input 
                    isLoading={props.loadingPage}
                    isInvalid={props.emailError}
                    errorMessage={props.emailError && `Ingrese un correo electrónico válido`}
                    type="text" 
                    label="Email" 
                    value={props.email}
                    onChange={(e) => handleEmail(e.target.value)}
                />
                <Autocomplete 
                    isLoading={props.loadingPage}
                    defaultItems={roles}
                    label="Rol"
                    selectedKey={props.rol}
                    onSelectionChange={props.setRol}
                >
                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
                <Status 
                    status={props.active}
                    setStatus={props.setActive}
                    elementName='usuario'
                    nameStatusTrue='Activo'
                    nameStatusFalse='Inactivo'
                />
            </>
        ) : (
            <>
                <div className='flex gap-4'>
                    <Input 
                        type="text" 
                        label="Nombre" 
                        value={props.name}
                        onValueChange={props.setName}
                    />
                    <Input 
                        type="text" 
                        label="Apellido" 
                        value={props.lastName}
                        onValueChange={props.setLastName}
                    />
                    <Input 
                        type="text" 
                        label="Nombre de usuario"
                        isInvalid={props.userNameError}
                        errorMessage={props.userNameError && `Nombre de usuario existente o contiene espacio`}
                        value={props.username}
                        onChange={(e) => handleUsername(e.target.value)}
                    />
                </div>
                <div className='flex gap-4'>
                    <Input 
                        type="text" 
                        label="Email" 
                        isInvalid={props.emailError}
                        errorMessage={props.emailError && `Ingrese un correo electrónico válido`}
                        value={props.email}
                        onChange={(e) => handleEmail(e.target.value)}
                    />
                    <Autocomplete 
                        defaultItems={roles}
                        label="Rol"
                        selectedKey={props.rol}
                        onSelectionChange={props.setRol}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <Input
                    label="Contraseña"
                    isInvalid={props.passwordError.error}
                    errorMessage={props.passwordError.message}
                    value={props.password}
                    onChange={(e) => handleNewPasswordChange(e.target.value)}
                    endContent={
                        <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        >
                        {isVisible ? (
                            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <IoEyeSharp className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                />
            </>
        )
    )
}

export default ElementEditAndCreate