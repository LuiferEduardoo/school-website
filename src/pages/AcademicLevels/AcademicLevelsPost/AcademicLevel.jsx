import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAcademicLevels } from "../../../services/academicLevels.service";
import { Skeleton } from "@nextui-org/react";
import AcademicLevels from "../../../components/AcademicLevels";
import PagesError from "../../../components/PagesError";

const AcademicLevel = () => {
    const [academicLevel, setAcademicLevel] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorPage, setErrorPage] = useState();

    const { id } = useParams();

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setErrorPage()
                setIsLoading(true);
                const response = await getAcademicLevels(
                    null,
                    null,
                    null,
                    null,
                    null,
                    id,
                    true
                );
                setAcademicLevel(response);
            } catch (error) {
                setErrorPage(error.response.status || 500)
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, []);
    return (
        <main className="w-full h-full py-5 bg-gray-100">
            {isLoading ? (
                <Skeleton className="w-full h-[100rem]" />
            ) : !errorPage ? (
                <>
                    <Helmet>
                        <title>{academicLevel.nameLevel}</title>
                        <meta
                            name="description"
                            content={academicLevel.description}
                        />
                    </Helmet>
                    <AcademicLevels
                        nameLevel={academicLevel.nameLevel}
                        description={academicLevel.description}
                        levelCode={academicLevel.levelCode}
                        educationObjectives={academicLevel.educationalObjectives}
                        admissionRequirements={academicLevel.admissionRequirements}
                        campusNumber={academicLevel.campus.campusNumber}
                        educationDay={academicLevel.educationDay.educationDay}
                        modality={academicLevel.modality.modality}
                        image={academicLevel.imageAcademicLevels[0].image.file}
                        imageName={academicLevel.imageAcademicLevels[0].image.file.name}
                    />
                </>
            ) : (
                <PagesError 
                    error={errorPage}
                />
            )}
        </main>
    )
}

export default AcademicLevel