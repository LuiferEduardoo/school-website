import React, { useContext, useEffect, useState } from 'react';
import { useDisclosure} from "@nextui-org/react";
import { AuthContext }  from './../../../../../../../providers/AuthContext'
import { emptyStates, dataForTheAPI } from './data';
import verifyIfDataIsDiferente from '../../../../../../../utils/verifyIfDataIsDiferente';
import { postAcademicLevels, updateAcademicLevels } from '../../../../../../../services/academicLevels.service';
import { toast } from 'sonner';
import InformationBasic from './InformationBasic'
import StatusComponent from './Status';
import CourseOverView from './CourseOverView'
import { Image } from '../../../../components/Form';
import { MultiStep } from '../../../../../components/Form';
import Preview from './../../../../components/Preview';
import PreviewContent from './../../PreviewContent';

const Academic = (props) => {
    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(AuthContext)
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState(props.nameLevel || '');
    const [code, setCode] = useState(props.levelCode || '');
    const [valueCampus, setValueCampus] = useState(props.campusNumber ? new Set([props.campusNumber?.toString()]) : new Set());
    const [valueModality, setValueModality] = React.useState(props.modality ? new Set([props.modality]) : new Set());
    const [valueEducationalDay, setValueEducationalDay] = React.useState(props.educationDay ? new Set([props.educationDay]) : new Set());    
    const [description, setDescription] = useState(props.description || '');
    const [educationObjectives, setEducationObjectives] = useState(props.educationalObjectives || '');
    const [admissionRequirements, setAdmissionRequirements] = useState(props.admissionRequirements || '');
    const [images, setImages] = useState(props.image ? [props.image] : []);
    const [idEliminateImage, setEditEliminateImage] = useState(new Set());
    const [newImage, setNewImage] = useState([]);
    const [status, setStatus] = useState(props.visible)
    const [isDifferent, setIsDifferent] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState({})

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false)
    const [isDisabledAction, setIsDisabledAction] = useState(false)
    const image = images.concat(newImage)

    const propsFilesInput = props.edit ? {
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
    useEffect(() => {
        if(props.edit){
            const verifyDataToUpdate = verifyIfDataIsDiferente([
                {ancientElement: props.nameLevel, recentElement: name, nameField: 'nameLevel'}, 
                {ancientElement: props.levelCode, recentElement: code, nameField: 'levelCode'},
                {ancientElement: props.campusNumber, recentElement: valueCampus.currentKey, nameField: 'campusNumber'},
                {ancientElement: props.modality, recentElement: valueModality.currentKey, nameField: 'modality'},
                {ancientElement: props.educationDay, recentElement: valueEducationalDay.currentKey, nameField: 'educationDay'},
                {ancientElement: props.description, recentElement: description, nameField: 'description'},
                {ancientElement: props.educationalObjectives, recentElement: educationObjectives, nameField: 'educationalObjectives'},
                {ancientElement: props.admissionRequirements, recentElement: admissionRequirements, nameField: 'admissionRequirements'},
                {ancientElement: '', recentElement: [...idEliminateImage]?.[0], nameField: 'idImageEliminate'},
                {ancientElement: props.visible, recentElement: status, nameField: 'visible'},
                {ancientElement: props.image?.id, recentElement: newImage, elementType: 'image', idImageEliminate: [...idEliminateImage]?.[0] },
            ], setIsDifferent, true)
            setDataToUpdate(verifyDataToUpdate);
        }
    }, [name, description, code, valueCampus, valueEducationalDay, valueModality, educationObjectives, admissionRequirements, status, idEliminateImage, newImage])
    const handleAction = async ()=> {
        try{
            setIsLoading(true)
            let message;
            if(props.edit){
                const response = await updateAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, dataToUpdate);
                message = response.message;
                props.setUpdatePage(true);
            } else {
                const formData = dataForTheAPI({name, description, code, valueCampus, valueEducationalDay, valueModality, educationObjectives, admissionRequirements, images})
                const response = await postAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken, formData);
                message = response.message;
                emptyStates(setStep, [{state: setName}, {state: setCode}, {state: setDescription}, {state: setValueCampus}, {state: setValueCampus}, {state: setValueModality}, {state: setValueEducationalDay}, {state: setEducationObjectives}, {state: setAdmissionRequirements}, {state: setImages, value: []}]);
            }
            toast.success(message);
            setStep(1)
        } catch(error){
            toast.warning(error.message);
        } finally{
            setIsLoading(false)
        }
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
                edit={props.edit}
            />
        },
        {
            name: 'Información y Requerimientos',
            component: <CourseOverView
                setDescription={setDescription}
                description={description}
                setEducationObjectives={setEducationObjectives}
                educationObjectives={educationObjectives}
                setAdmissionRequirements={setAdmissionRequirements}
                admissionRequirements={admissionRequirements} 
                edit={props.edit}
                setIsDisabledNext={setIsDisabledNext}
                setIsDisabledAction={setIsDisabledAction}
            />
        },
    ];

    if (props.edit) {
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
                edit={props.edit}
                isDisabledNext={isDisabledNext}
                isDisabledAction={isDisabledAction}
                handleAction={handleAction}
                isLoading={isLoading}
                step={step} 
                setStep={setStep}
                hasPreview
                style='flex flex-col gap-4'
            />
                <Preview 
                    isOpen={isOpen}
                    onClose={onClose}
                > 
                    <PreviewContent 
                        nameLevel={name}
                        levelCode={code}
                        image={image[0]}
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