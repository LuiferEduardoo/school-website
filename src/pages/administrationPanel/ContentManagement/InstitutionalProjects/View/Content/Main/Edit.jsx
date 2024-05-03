import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Skeleton } from "@nextui-org/react";
import { getInstitutionalProyects } from "../../../../../../../services/institutitionalProjects.service";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import InstitutionalProjects from "../../../components/Form/InstitutionalProjects";
import { Helmet } from "react-helmet";

const Edit = () => {
    const { institutionalProject } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(AuthContext);
    const [institutionaProject, setInstitutionalProjects] = useState({});

    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        const callAPI = async () => {
            try{
                setIsLoading(true)
                const response = await getInstitutionalProyects(accessToken, refreshToken, setAccessToken, setRefreshToken, {}, institutionalProject)
                setInstitutionalProjects(response);
            } catch(error){
                navigate("..");
            }finally{
                setIsLoading(false);
                setUpdatePage(false)
            }
        }
        callAPI();
    },[updatePage]);
    return (
        <>
            <Helmet>
                <title>Editar proyecto institucional</title>
            </Helmet>
            {isLoading ? (
                <>
                    <Skeleton className="w-full h-full rounded-lg"/>
                </>
            ) : (
                <InstitutionalProjects 
                    edit={true}
                    id={institutionalProject}
                    setUpdatePage={setUpdatePage}
                    title={institutionaProject?.title}
                    content={institutionaProject?.content}
                    startedAt={institutionaProject?.startedAt}
                    image={institutionaProject?.ImageInstitutionalProjects?.[0].image?.file}
                    categories={institutionaProject?.categories?.map(c => ({id: c.categories.id, name: c.categories.clasification.name, isExisting: true}))}
                    subcategories={institutionaProject?.subcategories?.map(c => ({id: c.subcategories.id, name: c.subcategories.clasification.name, isExisting: true}))}
                    tags={institutionaProject?.tags?.map(c => ({id: c.tags.id, name: c.tags.clasification.name, isExisting: true}))}
                    members={institutionaProject?.members?.map(u => ({id: u.id, idUser: u.userId, isCoordinator: u.isCoordinator, isExisting: true}))}
                    visible={institutionaProject.visible}
                    fixed={institutionaProject.important}
                />
            )}
        </>
    )
}

export default Edit