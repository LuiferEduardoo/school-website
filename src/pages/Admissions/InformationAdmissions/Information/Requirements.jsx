import data from "./data";
import { Button } from "@nextui-org/react";
import {useDisclosure} from "@nextui-org/react";
import FormAdmissionRequest from "../../../../components/FormAdmissionRequest";


const Requirements = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    
    return (
        <section className="flex flex-col lg:flex-row bg-blue-200 h-auto w-full">
            <div className="w-full lg:w-[50%] h-full">
                <img src="../src/assets/img/file.webp" className="bg-cover" alt="why-choose-us"/>
            </div>
            <div className="prose p-10 lg:pt-5 lg:p-0 w-full h-auto ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Requisitos</h1>
                <ol className="text-gray-600 text-lg">
                    {data.requirement.map((r, index) => (
                        <li key={index}>{r}</li>
                    ))}
                </ol>
                <Button color="primary" size="lg" className="mb-2 font-medium" onPress={onOpen}>
                    Aplicar Ahora
                </Button>
                <FormAdmissionRequest 
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            </div>
        </section>
    )
}

export default Requirements