import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import { getInstitutionalProyectsPublications } from "../../../../services/institutionalProjectsPublication.service";
import { getInstitutionalProyects } from "../../../../services/institutitionalProjects.service";
import Publications from "./../../../../components/Publications";
import PagesError from "../../../../components/PagesError";

const PublicationContent = () => {
    const [publication, setPublication] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorPage, setErrorPage] = useState();

    const { institituionalProyect, institituionalProyectPublication } = useParams();

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setErrorPage()
                setIsLoading(true);
                const params = {
                    link: institituionalProyectPublication,
                };
                const institutionalProject = await getInstitutionalProyects(null, null, null, null, { link: institituionalProyect}, null, true);
                const response = await getInstitutionalProyectsPublications(null, null, null, null, institutionalProject.id, params, null, true);
                setPublication(response);
            } catch (error) {
                setErrorPage(error.response.status || 500);
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, []);

    return (
        <main className="w-full h-full py-5">
            {isLoading ? (
                <Skeleton className="w-full h-[100rem]" />
            ) : !errorPage ? (
                <>
                    <Helmet>
                        <title>{publication.publication.title}</title>
                        <meta
                            name="description"
                            content={publication.publication.content}
                        />
                    </Helmet>
                    <Publications
                        title={publication.publication.title}
                        imageUrl={publication.ImageInstitutionalProjectPublication[0].image.file}
                        imageName={publication.ImageInstitutionalProjectPublication[0].image.file.name}
                        content={publication.publication.content}
                        createdAt={publication.publication.createdAt}
                        timeDuration={publication.publication.reading_time}
                        authors={publication.InstitutionalProjectsPublicationsAuthors}
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

export default PublicationContent;