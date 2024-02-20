import React, { useState } from 'react';
import { useDisclosure} from "@nextui-org/react";
import InformationBasic from './InformationBasic'
import StatusComponent from './Status';
import CourseOverView from './CourseOverView'
import { Image } from '../../../../components/Form';
import { MultiStep } from '../../../../../components/Form';
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
    const [isDifferent, setIsDifferent] = useState(false)

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false)
    const [isDisabledAction, setIsDisabledAction] = useState(false)
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
    const fields = [
        { 
            name: 'Información basica', 
            component: <InformationBasic 
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
                setIsDisabledNext={setIsDisabledNext} 
            /> 
        },
        { 
            name: 'Imagen', 
            component: <Image 
                propsFilesInput={propsFilesInput}
                setIsDisabledNext={setIsDisabledNext}
                edit={edit}
            />
        },
        {
            name: 'Información y Requerimientos',
            component: <CourseOverView
                handleDescriptionChange={handleDescriptionChange}
                description={description}
                handleEducationObjectives={handleEducationObjectives}
                educationObjectives={educationObjectives}
                handleAdmissionRequirements={handleAdmissionRequirements}
                admissionRequirements={admissionRequirements} 
                edit={edit}
                setIsDisabledNext={setIsDisabledNext}
                setIsDisabledAction={setIsDisabledAction}
            />
        },
    ];

    if (edit) {
        fields.push({
            name: 'Estado',
            component:<StatusComponent 
                status={status}
                setStatus={setStatus}
                isDifferent={isDifferent}
                setIsDisabledAction={setIsDisabledAction}
            /> 
        });
    }

    return (
        <>
            <MultiStep 
                fields={fields}
                onOpen={onOpen}
                edit={edit}
                isDisabledNext={isDisabledNext}
                isDisabledAction={isDisabledAction}
                style='flex flex-col gap-4'
            />
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
        </>
    )
}

export default Academic