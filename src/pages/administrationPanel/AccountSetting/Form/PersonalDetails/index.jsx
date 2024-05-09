import { Input } from "@nextui-org/react";
import validateEmail from "../../../../../utils/validateEmail";

const PersonalDetails = (props) => {
    const handleEmail = (value) => {
        props.setEmail(value);
        props.setEmailError(!validateEmail(value));
    };
    return (
        <section className="grid grid-cols-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                    required
                    type="text" 
                    label="Nombre" 
                    value={props.name}
                    onValueChange={props.setName}
                />
                <Input 
                    required
                    type="text" 
                    label="Apellido" 
                    value={props.lastName}
                    onValueChange={props.setLastName}
                />
            </div>
            <Input 
                required
                isInvalid={props.emailError}
                errorMessage={props.emailError && `Ingrese un correo electrónico válido`}
                type="text" 
                label="Email" 
                value={props.email}
                onChange={(e) => handleEmail(e.target.value)}
            />
        </section>
    )
}

export default PersonalDetails