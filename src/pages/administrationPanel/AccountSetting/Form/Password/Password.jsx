import { useState } from "react";
import validatePassword from "../../../../../utils/validatePassword";
import { Input } from "@nextui-org/react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const Password = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleNewPasswordChange = (value, isError, status, statusError, isSame, otherValue) => {
        status(value);
        if(isError){
            if(isSame){
                statusError({
                    error: !validatePassword(value) || otherValue !== value,
                    message: !validatePassword(value) 
                    ? "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
                    : otherValue !== value 
                    ? "La contraseña debe ser iguales" 
                    : ""
                });
            } else {
                statusError({
                    error: !validatePassword(value),
                    message: validatePassword(value)
                    ? ""
                    : "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
                });
            }
        }
    };
    
    return(
        <>
            <Input
                label={props.label}
                isInvalid={props?.passwordError?.error}
                isDisabled={props.isDisabled}
                value={props.value}
                onChange={(e) => handleNewPasswordChange(e.target.value, props.isError, props.status, props.statusError, props.isSame, props.otherValue)}
                errorMessage={props?.passwordError?.message}
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
}

export default Password