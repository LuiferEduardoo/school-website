import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import { getInstitutionalProyectsPublications } from "../../../../services/institutionalProjectsPublication.service";
import Publications from "./../../../../components/Publications";
import PageNotFounde from "./../../../../components/PageNotFounde"

const PublicationContent = () => {
    const [publication, setPublication] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const { institituionalProyectPublication } = useParams();

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setNotFound(false)
                setIsLoading(true);
                const params = {
                    link: institituionalProyectPublication,
                };
                const response = await getInstitutionalProyectsPublications(null, null, null, null, null, params, null, true);
                setPublication(response);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setNotFound(true);
                }
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
            ) : !notFound ? (
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
                <PageNotFounde />
            )}
        </main>
    )
}

export default PublicationContent;