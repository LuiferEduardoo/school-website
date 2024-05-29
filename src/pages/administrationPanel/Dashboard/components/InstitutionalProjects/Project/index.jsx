import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./../../../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "./../../../../../../providers/AdministrationPanelContext";
import { getInstitutionalProyects } from "../../../../../../services/institutitionalProjects.service";
import { Skeleton } from "@nextui-org/react";
import ProjectComponent from "./ProjectComponent";
import Publication from "../Publication";
import NoContent from "./NoContent";

const Project = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);
    const [institutionalProjects, setInstitutionalProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const institutionalProjectsFunction = async () => {
            try{
                const parameters = {member: userInformation.id}
                const response = getInstitutionalProyects(accessToken, setAccessToken, refreshToken, setRefreshToken, parameters);
                setInstitutionalProjects(response)
            } catch(error){
            } finally {
                setIsLoading(false); // Cuando la solicitud se complete, establece loading en falso
            }
        }
        institutionalProjectsFunction();
    }, [])
    return (
        <>
            {isLoading ? (
                <Skeleton className="w-full h-full"/>
            ): (
                institutionalProjects.length > 0 ? (
                    institutionalProjects.map(({ id, title, content, ImageInstitutionalProjects }, index) => (
                        <ProjectComponent
                            key={index}
                            title={title}
                            content={content}
                            image={ImageInstitutionalProjects.image.file.url}
                        >
                            <Publication 
                                idProyect={id}
                            />
                        </ProjectComponent>
                    ))
                ) : <NoContent />
            )}
        </>
    )
}

export default Project