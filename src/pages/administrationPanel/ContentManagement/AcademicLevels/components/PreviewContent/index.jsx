import AcademicLevels from "../../../../../../components/AcademicLevels";

const PreviewContent = (props) => {
    return (
        <AcademicLevels 
            nameLevel={props?.nameLevel}
            levelCode={props?.levelCode}
            image={props?.image}
            description={props?.description}
            educationalDay={props?.educationalDay}
            campus={props?.campus}
            modality={props?.modality}
            educationObjectives={props?.educationObjectives}
            admissionRequirements={props?.admissionRequirements}
        />
    )
}

export default PreviewContent