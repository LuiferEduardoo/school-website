import { useContext } from "react";
import { AcademicLevelsContext } from "../..";
import { Button, useDisclosure } from "@nextui-org/react";
import FormAdmissionRequest from "../../../FormAdmissionRequest";

const Information = () => {
    const { nameLevel, description } = useContext(AcademicLevelsContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="h-auto md:w-1/2 md:pr-4 flex flex-col justify-center items-center px-6">
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center mb-4">{`¿Por qué estudiar ${nameLevel} en María Inmaculada?`}</h2>
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
            <div className="w-full flex justify-start">
                <Button
                    color="primary"
                    size="lg"
                    className="mt-8 font-medium"
                    onPress={onOpen}
                >
                    Aplicar Ahora
                </Button>
            </div>
            <FormAdmissionRequest
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </div>
    );
};

export default Information;