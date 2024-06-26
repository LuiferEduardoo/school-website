import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import { getInstitutionalProyects } from "../../../../services/institutitionalProjects.service";
import InstitutionalProyects from "../../../../components/InstitutionalProjects";
import PagesError from "../../../../components/PagesError";

const Post = () => {
    const [institutionalProject, setInstitutionalProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorPage, setErrorPage] = useState();

    const { institituionalProyect } = useParams();

    useEffect(() => {
        const callToAPI = async() => {
            try {
                setErrorPage()
                setIsLoading(true);
                const params = {
                    link: institituionalProyect
                };
                const response = await getInstitutionalProyects(null, null, null, null, params, null, true);
                setInstitutionalProject(response);
            } catch (error) {
                setErrorPage(error.response.status || 500);
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
            ) : !errorPage ? (
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
                        image={institutionalProject.ImageInstitutionalProjects[0].image.file}
                        imageName={institutionalProject.ImageInstitutionalProjects[0].image.file.name}
                        content={institutionalProject.content}
                        coordinators={institutionalProject.members.filter(member => member.isCoordinator === true)}
                        publication
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

export default Post