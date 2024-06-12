import { FaWpforms } from "react-icons/fa6";
import { IoDocumentAttachOutline, IoPeopleOutline } from "react-icons/io5";
import { PiExam } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
import { LiaFileContractSolid } from "react-icons/lia";

export default [
    {
        icon: <FaWpforms className="w-5 h-5"/>,
        title: "Formulario",
        description: "Enviar tu aplicación por medio de formulario"
    }, 
    {
        icon: <IoDocumentAttachOutline className="w-5 h-5"/>,
        title: "Documento",
        description: "Envio de documentos solicitados"
    },
    {
        icon: <IoPeopleOutline className="w-5 h-5"/>,
        title: "Primera entrevista",
        description: "Entrevista por parte de coordinación"
    }, 
    {
        icon: <PiExam className="w-5 h-5"/>,
        title: "Prueba diagnostica",
        description: "Prueba diagnostica de español y matemáticas"
    },
    {
        icon: <IoPeopleOutline className="w-5 h-5"/>,
        title: "Segunda entrevista",
        description: "Entrevista por parte de psicorientación"
    },
    {
        icon: <AiOutlineCheck className="w-5 h-5"/>,
        title: "Respuesta",
        description: <p>Respuesta a tu solicitud <a href="/admisiones/estado" className="underline decoration-solid">mirar aquí</a></p>
    }, 
    {
        icon: <LiaFileContractSolid className="w-5 h-5"/>,
        title: "Matrícula en secretaría",
        description: "Concretar la matrícula en secretaría"
    }
]