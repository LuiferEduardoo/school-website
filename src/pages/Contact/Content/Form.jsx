import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Input,
    Textarea
} from "@nextui-org/react";
import validateEmail from "../../../utils/validateEmail";
import { sendForm } from "@emailjs/browser";
import { toast } from "sonner";


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const [emailError, setEmailError] = useState(false);

    const [isDisable, setIsDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmail = (value) => {
        setEmail(value);
        setEmailError(!validateEmail(value));
    };

    useEffect(() => {
        if(!name || !email || !subject || !description || emailError) {
            setIsDisable(true);
        } else {
            setIsDisable(false);
        }
    }, [name, email, subject, description]);

    const sendEmail = async(event) => {
        event.preventDefault();
        
        try{
            setIsLoading(true);
            const serviceId = import.meta.env.SERVICE_ID_EMAIL;
            const templateId = import.meta.env.TEMPLATE_ID_EMAIL;
            const apiKey = import.meta.env.API_KEY_EMAIL;

            await sendForm(serviceId, templateId, {
                name,
                email,
                subject,
                description
            }, apiKey);
            setName('');
            setEmail('');
            setSubject('');
            setDescription('');
            toast.success('Enviado con exito');
        } catch(error){
            toast.warning('Error a la hora de enviarlo')
        } finally{
            setIsLoading(false);
        }

    }
    return (
        <Card className="w-full px-3">
            <CardHeader className="block space-y-3">
                <h3 className="font-bold text-2xl">Envíanos un mensaje</h3>
                <p className="text-gray-500">
                    Llena el formulario y nos pondremos en contacto contigo.
                </p>
            </CardHeader>
            <CardBody>
                <form className="space-y-4" onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input 
                            isRequired
                            label="Nombres" 
                            variant="bordered"
                            value={name} 
                            onValueChange={setName} 
                        />
                        
                        <Input 
                            isRequired
                            type="email" 
                            label="Correo electronico" 
                            variant="bordered"
                            isInvalid={emailError}
                            errorMessage={emailError && `Ingrese un correo electronico válido`}
                            value={email} 
                            onChange={(e) => handleEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input 
                            isRequired
                            label="Asunto"
                            variant="bordered" 
                            value={subject} 
                            onValueChange={setSubject}
                        />
                    </div>
                    <div className="space-y-2">
                        <Textarea
                            isRequired
                            label="Descripción"
                            variant="bordered"
                            value={description}
                            onValueChange={setDescription}
                        />
                    </div>
                    <Button 
                        type="submit"
                        color="primary" 
                        className="ml-auto" 
                        isLoading={isLoading} 
                        isDisabled={isDisable}
                    >
                        Enviar
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
};

export default Form
