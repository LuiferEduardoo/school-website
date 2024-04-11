import React, { useEffect } from "react";
import EditorText from '../../../../../components/EditorText';
import { Tabs, Tab } from "@nextui-org/react";

const CourseOverView = (props) => {
    const setDisable = (status) => props.edit ? props.setIsDisabledNext(status) : props.setIsDisabledAction(status);

    const handleDescriptionChange = (content, editor) => {
        props.setDescription(content);
    };
    const handleEducationObjectives = (content, editor) => {
        props.setEducationObjectives(content);
    }
    const handleAdmissionRequirements = (content, editor) => {
        props.setAdmissionRequirements(content);
    }

    useEffect(() => {
        if (!props.description || !props.educationObjectives || !props.admissionRequirements)
            setDisable(true);
        else 
            setDisable(false);
    }, [props.description, props.educationObjectives, props.admissionRequirements, props.setIsDisabledNext]);
    return (
        <div className="col-span-5 flex w-full flex-col h-auto">
            <Tabs aria-label="Options">
                <Tab key="description" title={`Descripción *`}>
                    <EditorText onChangeContent={handleDescriptionChange} content={props.description} /> 
                </Tab>
                <Tab key="objetive" title={`Objetivo educativos *`}>
                    <EditorText onChangeContent={handleEducationObjectives} content={props.educationObjectives}/> 
                </Tab>
                <Tab key="admisionRequirement" title={`Requerimiento admisión *`}>
                    <EditorText onChangeContent={handleAdmissionRequirements} content={props.admissionRequirements}/>
                </Tab>
            </Tabs>
        </div>  
    )
}

export default CourseOverView

