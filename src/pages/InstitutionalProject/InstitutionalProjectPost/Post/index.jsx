import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import { getInstitutionalProyects } from "../../../../services/institutitionalProjects.service";
import InstitutionalProyects from "../../../../components/InstitutionalProjects";
import PageNotFounde from "../../../../components/PageNotFounde";

const Post = () => {
    const [institutionalProject, setInstitutionalProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const { institituionalProyect } = useParams();

    useEffect(() => {
        const callToAPI = async() => {
            try {
                setIsLoading(true);
                const params = {
                    link: institituionalProyect
                };
                const response = await getInstitutionalProyects(null, null, null, null, params, null, true);
                setInstitutionalProject(response);
                setNotFound(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setNotFound(true);
                }
            } finally {
                setIsLoading(false);
            }
        }
        callToAPI();
    }, [])

    return (
        <main className="w-full h-full">
            {isLoading ? (
                <Skeleton className="w-full h-[100rem]" />
            ) : !notFound ? (
                <>
                    <Helmet>
                        <title>Proyecto Institucional - {institutionalProject.title}</title>
                        <meta
                            name="description"
                            content={institutionalProject.content}
                        />
                    </Helmet>
                    <InstitutionalProyects
                        id={institutionalProject.id}
                        title={institutionalProject.title}
                        image={institutionalProject.ImageInstitutionalProjects[0].image.file.url}
                        imageName={institutionalProject.ImageInstitutionalProjects[0].image.file.name}
                        content={institutionalProject.content}
                        coordinators={institutionalProject.members.filter(member => member.isCoordinator === true)}
                        publication
                    />
                </>
            ) : (
                <PageNotFounde />
            )}
        </main>
    )
}

export default Post