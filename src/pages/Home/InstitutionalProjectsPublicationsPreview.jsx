import { useEffect, useState } from "react";
import { getInstitutionalProyects } from "../../services/institutitionalProjects.service";
import { getInstitutionalProyectsPublications } from "../../services/institutionalProjectsPublication.service";
import { Skeleton } from "@nextui-org/react";
import PreviewPublications from "../../components/PreviewPublications";

const InstitutionalProjectsPublicationsPreview = () => {
    const [
        institutionalProjectsPublications,
        setInstitutionalProjectsPublications,
    ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setIsLoading(true);
                const response = await getInstitutionalProyects(
                    null,
                    null,
                    null,
                    null,
                    {},
                    null,
                    true
                );
                const projectIds = response.elements.map(
                    (institutional) => institutional.id
                );
                const params = {
                    important: true,
                    limit: 3
                };
                const allPublications = [];
                
                for (const institutional of projectIds) {
                    const publications = await getInstitutionalProyectsPublications(
                        null,
                        null,
                        null,
                        null,
                        institutional,
                        params,
                        null,
                        true
                    );
                    allPublications.push(...publications.elements);
                }
        
                setInstitutionalProjectsPublications(allPublications);
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
        
    }, []);
    return (
        <section className="space-y-4 px-8">
            {institutionalProjectsPublications.length > 0 && (
                <>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Publicaciones Destacadas De Proyectos Institucionales
                    </h2>
                    <div className="py-10 grid grip-cols-1 lg:grid-cols-3 gap-4">
                        {isLoading
                            ? [...Array(6)].map((_, index) => (
                                <Skeleton
                                    className="w-full h-[26rem] rounded-md"
                                    key={index}
                                />
                            ))
                            : institutionalProjectsPublications.map((publication) => (
                                <PreviewPublications
                                    key={publication.id}
                                    link={`proyectos-institucionales/${publication.InstitutionalProjectId}/${publication?.publication?.link}`}
                                    title={publication?.publication?.title}
                                    image={
                                        publication
                                            ?.ImageInstitutionalProjectPublication?.[0]
                                            ?.image?.file?.url
                                    }
                                    createdAt={publication?.publication?.createdAt}
                                    content={publication?.publication?.content}
                                />
                            ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default InstitutionalProjectsPublicationsPreview;
