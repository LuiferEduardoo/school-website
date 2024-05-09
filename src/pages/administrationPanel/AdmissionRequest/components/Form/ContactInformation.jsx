import {Input} from "@nextui-org/react";
import validateEmail from "../../../../../utils/validateEmail";
import validatePhoneNumber from "../../../../../utils/validatePhoneNumber";

const ContactInformation = (props) => {

    const handleEmail = (value) => {
        props.setEmail(value);
        props.setEmailError(!validateEmail(value));
    };

    const handlePhoneNumber = (value ) => {
        props.setPhoneNumber(value);
        props.setPhoneNumberError(!validatePhoneNumber(value))
    }

    return (
        <>
            <Input 
                isLoading={props.isLoadingPage}
                isRequired
                isInvalid={props.phoneNumberError}
                errorMessage={props.phoneNumberError && `Ingrese un numero de telefono válido`}
                type="number"
                label="Numero de telefono"
                value={props.phoneNumber}
                onChange={(e) => handlePhoneNumber(e.target.value)}
            />
            <Input 
                isLoading={props.isLoadingPage}
                isRequired
                type="email"
                label="Correo electronico"
                isInvalid={props.emailError}
                errorMessage={props.emailError && `Ingrese un correo electronico válido`}
                value={props.email}
                onChange={(e) => handleEmail(e.target.value)}
            />
        </>
    );
}

export default ContactInformation