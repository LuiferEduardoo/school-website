import { useEffect, useState } from "react";
import { getInstitutionalProyects } from "../../../../services/institutitionalProjects.service";
import Content from "./Content";
import Skeleton from "./Skeleton"

const InstitutionalProyectsPreview = () => {
    const [institutionalProjects, setInstitutionalProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async() => {
            try {
                setIsLoading(true);
                const params = {
    
                }
                const response = await getInstitutionalProyects(null, null, null, null, params, null, true);
                setInstitutionalProjects(response.elements);
            } finally {
                setIsLoading(false);
            }
        }
        callToAPI();
    }, [])

    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-12 px-8">
            {isLoading ? (
                [...Array(8)].map((_, index) => (
                    <Skeleton
                        key={index}
                    />
                ))
            ) : (
                institutionalProjects.map((institituionalProyect, index) => (
                    <Content 
                        key={index}
                        link={institituionalProyect.link}
                        image={institituionalProyect.ImageInstitutionalProjects[0].image.file.url}
                        nameImage={institituionalProyect.ImageInstitutionalProjects[0].image.file.name}
                        name={institituionalProyect.title}
                        content={institituionalProyect.content}
                    />
                ))
            )}
        </section>
    )
}

export default InstitutionalProyectsPreview