import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import FormPublications from "../../../components/Form/Publications";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import { getInstitutionalProyectsPublications } from "../../../../../../../services/institutionalProjectsPublication.service";

const Edit = () => {
    const { institutionalProject, idPublication } = useParams();
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true)
    const [publication, setPublication] = useState({});
    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        const callAPI = async () => {
            try{
                setIsLoading(true)
                const response = await getInstitutionalProyectsPublications(accessToken, refreshToken, setAccessToken, setRefreshToken, institutionalProject, {}, idPublication);
                setPublication(response);
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
                <title>Editar publicación - Proyecto Institucional</title>
            </Helmet>
            {isLoading ? (
                <>
                    <Skeleton className="w-full h-full rounded-lg"/>
                </>
            ) : (
                <FormPublications
                    edit 
                    setUpdatePage={setUpdatePage}
                    id={idPublication}
                    title={publication.publication.title}
                    content={publication.publication.content}
                    image={publication?.ImageInstitutionalProjectPublication?.[0].image?.file}
                    categories={publication.publication?.categories?.map(c => ({id: c.categories.id, name: c.categories.clasification.name, isExisting: true}))}
                    subcategories={publication.publication?.subcategories?.map(c => ({id: c.subcategories.id, name: c.subcategories.clasification.name, isExisting: true}))}
                    tags={publication.publication?.tags?.map(c => ({id: c.tags.id, name: c.tags.clasification.name, isExisting: true}))}
                    authors={publication.InstitutionalProjectsPublicationsAuthors.map(u => ({id: u.id, idUser: u.author.user.id, isExisting: true}))}
                    visible={publication.publication.visible}
                    important={publication.publication.important}
                />
            )}
        </>
    );
}

export default Edit