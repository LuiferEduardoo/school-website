import { useContext } from "react";
import { AcademicLevelsContext } from "../..";

const Information = () => {
    const {educationObjectives, nameLevel, modality, educationalDay, campus} = useContext(AcademicLevelsContext)
    return (
        <div className="flex flex-col gap-6 md:flex-row items-start">
            <div className="md:w-1/2 md:pr-4">
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: educationObjectives }}
                />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
                <ul>
                    <li>
                        <strong>Nombre del nivel académico:</strong> {nameLevel}
                    </li>
                    <li>
                        <strong>Modalidad:</strong> {modality}
                    </li>
                    <li>
                        <strong>Jornada:</strong> {educationalDay}
                    </li>
                    <li>
                        <strong>Sede:</strong> {campus}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Information
