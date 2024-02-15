import React, { useState } from 'react';
import { useDisclosure} from "@nextui-org/react";
import InformationBasic from './InformationBasic'
import CourseOverView from './CourseOverView'
import Images from './Images'
import Buttons from './Buttons'
import StatusForm from '../../../../../components/StatusForm'
import Preview from './../../../../components/Preview';
import PreviewContent from './../../PreviewContent';


const Academic = ({edit}) => {
    const [name, setName] = useState('');
    const [code, setCode] = useState();
    const [valueCampus, setValueCampus] = useState(new Set([]));
    const [valueModality, setValueModality] = React.useState(new Set([]));
    const [valueEducationalDay, setValueEducationalDay] = React.useState(new Set([]));
    const [description, setDescription] = useState('');
    const [educationObjectives, setEducationObjectives] = useState('');
    const [admissionRequirements, setAdmissionRequirements] = useState('');
    const [images, setImages] = useState([]);
    const [idEliminateImage, setEditEliminateImage] = useState(new Set());
    const [newImage, setNewImage] = useState([]);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isPreview, setIsPreview] = useState(false);
    const [status, setStatus] = useState(true)
    const title = `${edit ? 'Editar' : 'Crear'} nivel academico`
    const image = images.concat(newImage)

    const propsFilesInput = edit ? {
        newFiles: newImage,
        setNewFiles: setNewImage,
        existingFiles: images,
        setExistingFiles: setImages,
        setIdEliminateExistingFiles: setEditEliminateImage,
        idEliminateExistingFiles: idEliminateImage
    } : {
        newFiles:images,
        setNewFiles:setImages
    }
    const handleDescriptionChange = (content, editor) => {
        setDescription(content);
    };
    const handleEducationObjectives = (content, editor) => {
        setEducationObjectives(content);
    }
    const handleAdmissionRequirements = (content, editor) => {
        setAdmissionRequirements(content);
    }

    return (
        <>
            <form className='flex flex-col gap-4 py-6 px-6 rounded bg-white lg:grid grid-cols-5 '>
                <h1 className="text-3xl font-bold text-gray-800 col-span-5 mb-5">{title}</h1>
                <InformationBasic 
                    name={name}
                    setName={setName}
                    code={code}
                    setCode={setCode}
                    valueCampus={valueCampus}
                    setValueCampus={setValueCampus}
                    valueModality={valueModality}
                    setValueModality={setValueModality}
                    valueEducationalDay={valueEducationalDay}
                    setValueEducationalDay={setValueEducationalDay}
                />
                <CourseOverView 
                    handleDescriptionChange={handleDescriptionChange}
                    description={description}
                    handleEducationObjectives={handleEducationObjectives}
                    educationObjectives={educationObjectives}
                    handleAdmissionRequirements={handleAdmissionRequirements}
                    admissionRequirements={admissionRequirements} 
                />
                {edit &&
                    <StatusForm 
                        elementName='nivel academico' 
                        status={status} 
                        setStatus={setStatus}
                        nameStatusTrue='Visible'
                        nameStatusFalse='Invisible'
                    />
                }
                <Images propsFilesInput={propsFilesInput}/>
                <Buttons onOpen={onOpen} />
                <Preview 
                    isOpen={isOpen}
                    onClose={onClose}
                > 
                    <PreviewContent 
                        nameLevel={name}
                        levelCode={code}
                        image={image}
                        description={description}
                        educationalDay={valueEducationalDay}
                        campus={valueCampus}
                        modality={valueModality}
                        educationObjectives={educationObjectives}
                        admissionRequirements={admissionRequirements}
                    />
                </Preview>
            </form>
        </>
    )
}

export default Academic