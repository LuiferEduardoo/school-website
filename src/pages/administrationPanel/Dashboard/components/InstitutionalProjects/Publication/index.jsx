import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./../../../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "./../../../../../../providers/AdministrationPanelContext";
import { getInstitutionalProyectsPublications } from "../../../../../../services/institutionalProjectsPublication.service";
import PublicationComponent from "./PublicationComponent";

const Publication = (props) => {
    const { accessToken, refreshToken, setRefreshToken } = useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);
    const [publications, setPublications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPublication = async () => {
            try{
                const parameters = {
                    limit: 3,
                    author: userInformation.id
                }
                const response = getInstitutionalProyectsPublications(accessToken, refreshToken, setRefreshToken, props.idProyect, parameters);
                setPublications(response)
            } catch(error){
            } finally{
                setIsLoading(false)
            }
        }
        getPublication();
    }, []);
    return (
        <> 
            {publications.length > 0 && !isLoading && (
                <>
                    <h3 className="text-lg font-semibold mb-4">Tus últimas publicaciones:</h3>
                    {publications.map((publication, index)=> (
                        <PublicationComponent 
                            index={index}
                            title={publication.title}
                            content={publication.content}
                            image={publication.ImageInstitutionalProyectPublication.image.file.url}
                        />
                    ))}
                </>
            )}
        </>
    )
}

export default Publication