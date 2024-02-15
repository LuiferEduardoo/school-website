import HeaderSection from "./HeaderSection"
import DescriptionWithImage from "./DescriptionWithImage"
import Content from "./Content"

const PreviewContent = ({nameLevel=null, levelCode=null, image=null, description=null, educationalDay=null, campus=null, modality=null, educationObjectives=null, admissionRequirements=null}) => {
    return (
        <>
            <HeaderSection 
                nameLevel={nameLevel}
                levelCode={levelCode}
            />
            <DescriptionWithImage 
                nameLevel={nameLevel}
                description={description}
                image={image}
            />
            <Content
                nameLevel={nameLevel}
                modality={modality}
                educationalDay={educationalDay}
                campus={campus}
                educationObjectives={educationObjectives}
                admissionRequirements={admissionRequirements}
            />
        </>
    )
}

export default PreviewContent