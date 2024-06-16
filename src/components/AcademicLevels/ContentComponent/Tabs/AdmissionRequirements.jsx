import { useContext } from "react";
import { AcademicLevelsContext } from "../..";

const AdmissionRequirements = () => {
    const {admissionRequirements} = useContext(AcademicLevelsContext);

    return (
        <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: admissionRequirements }} />
        </div>
    )
};

export default AdmissionRequirements;
