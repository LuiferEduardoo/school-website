import { useState } from "react";
import { Input } from "@nextui-org/react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const Password = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    
    return(
        <>
            <Input
                label={props.label}
                isInvalid={props.passwordError.error}
                variant="bordered"
                value={props.value}
                onChange={(e) => props.handlePassword(e.target.value)}
                errorMessage={props.passwordError.message}
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