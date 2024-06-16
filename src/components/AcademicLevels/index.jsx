import React, { createContext } from "react";
import Header from "./Header";
import DescriptionWithImage from "./DescriptionWithImage";
import ContentComponent from "./ContentComponent";

export const AcademicLevelsContext = createContext();

const AcademicLevels = (props) => {
    return (
        <AcademicLevelsContext.Provider value={{
            nameLevel: props?.nameLevel,
            levelCode: props?.levelCode,
            image: props?.image,
            imageName: props?.imageName,
            description: props?.description,
            educationalDay: props?.educationalDay,
            campus: props?.campus,
            modality: props?.modality,
            educationObjectives: props?.educationObjectives,
            admissionRequirements: props?.admissionRequirements
        }}>
            <article className="space-y-8 h-auto">
                <Header />
                <DescriptionWithImage />
                <ContentComponent />
            </article>
        </AcademicLevelsContext.Provider>
    )
}

export default AcademicLevels