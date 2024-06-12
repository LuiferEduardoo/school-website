import React, { useState, useEffect, useContext } from "react";
import { FormContext } from ".";
import {Input, Checkbox} from "@nextui-org/react";
import validateEmail from "../../../utils/validateEmail";
import validatePhoneNumber from "../../../utils/validatePhoneNumber";

const ContactInformation = () => {
    const {phoneNumberError, setPhoneNumberError, emailError, setEmailError, phoneNumber, setPhoneNumber, email, setEmail, isDisabledAction, setIsDisabledAction} = useContext(FormContext);
    const [isAccepted, setIsAccepted] = useState(false);
    const handleEmail = (value) => {
        setEmail(value);
        setEmailError(!validateEmail(value));
    };

    const handlePhoneNumber = (value ) => {
        setPhoneNumber(value);
        setPhoneNumberError(!validatePhoneNumber(value))
    }

    useEffect(() => {
        if (!phoneNumber || !email || phoneNumberError || emailError || !isAccepted)
            setIsDisabledAction(true);
        else 
        setIsDisabledAction(false);
    }, [phoneNumber, email, phoneNumberError, emailError, isAccepted]);

    return (
        <section className="space-y-6">
            <Input 
                variant="bordered"
                isRequired
                isInvalid={phoneNumberError}
                errorMessage={phoneNumberError && `Ingrese un numero de telefono válido`}
                type="number"
                label="Numero de telefono"
                value={phoneNumber}
                onChange={(e) => handlePhoneNumber(e.target.value)}
            />
            <Input 
                variant="bordered"
                isRequired
                type="email"
                label="Correo electronico"
                isInvalid={emailError}
                errorMessage={emailError && `Ingrese un correo electronico válido`}
                value={email}
                onChange={(e) => handleEmail(e.target.value)}
            />
            <Checkbox isSelected={isAccepted} onValueChange={setIsAccepted}>
                <span className="text-gray-500">
                    Acepto el tratamiento de mis datos personales conforme a los {<a href="/terminos-y-condiciones" className="underline">Terminos y condiciones</a>} y {<a href="/privacidad" className="underline">Política de Privacidad</a>} de IE María Inmaculada.
                </span>
            </Checkbox>
        </section>
    );
}

export default ContactInformation