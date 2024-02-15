import EditorText from '../../../../../components/EditorText';
import { Tabs, Tab } from "@nextui-org/react";

const CourseOverView = (props) => {
    return (
        <div className="col-span-5 flex w-full flex-col h-auto">
            <Tabs aria-label="Options">
                <Tab key="description" title={`Descripción *`}>
                    <EditorText onChangeContent={props.handleDescriptionChange} content={props.description} /> 
                </Tab>
                <Tab key="objetive" title={`Objetivo educativos *`}>
                    <EditorText onChangeContent={props.handleEducationObjectives} content={props.educationObjectives}/> 
                </Tab>
                <Tab key="videos" title={`Requerimiento admisión *`}>
                    <EditorText onChangeContent={props.handleAdmissionRequirements} content={props.admissionRequirements}/>
                </Tab>
            </Tabs>
        </div>  
    )
}

export default CourseOverView

