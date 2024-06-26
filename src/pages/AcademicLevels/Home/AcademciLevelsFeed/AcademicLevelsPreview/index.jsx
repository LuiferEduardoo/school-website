import { useEffect, useState } from "react";
import { getAcademicLevels } from "../../../../../services/academicLevels.service";
import SkeletonComponent from "./Skeleton";
import Content from "./Content";

const AcademicLevelsPreview = () => {
    const [academicLevels, setAcademicLevels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async() => {
            try{
                const response = await getAcademicLevels(null, null, null, null, null, null, true);
                setAcademicLevels(response.elements);
            } finally {
                setIsLoading(false);
            }
        }

        callToAPI();
    }, [])
    return (
        <section className="px-8 py-10 grid grip-cols-1 lg:grid-cols-3 gap-4">
            {isLoading ? (
                [...Array(8)].map((_, index) => (
                    <SkeletonComponent
                        key={index}
                    />
                ))
            ) : (
                academicLevels.map((a, index) => (
                    <Content 
                        key={index}
                        id={a.id}
                        image={a.imageAcademicLevels[0].image.file.url}
                        nameImage={a.imageAcademicLevels[0].image.file.name}
                        name={`${a.nameLevel} - sede ${a.campus.campusNumber} (${a.educationDay.educationDay})`}
                    />
                ))
            )}
        </section>
    )
}

export default AcademicLevelsPreview;