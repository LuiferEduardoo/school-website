import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import Form from './../components/Form';
import { AuthContext } from "../../../../../providers/AuthContext";
import { getNews } from "../../../../../services/news.service";

const Edit = () => {
    const { newsId } = useParams();
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState({});
    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        const callAPI = async () => {
            try{
                setIsLoading(true)
                const response = await getNews(accessToken, refreshToken, setAccessToken, setRefreshToken, newsId);
                setNews(response);
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
        isLoading ? (
            <>
                <Skeleton className="w-full h-full rounded-lg"/>
            </>
        ) : (
            <>
                <Helmet>
                    <title>Editar noticia - {news.publication.title} </title>
                </Helmet>
                <Form 
                    edit
                    setUpdatePage={setUpdatePage}
                    id={newsId}
                    title={news.publication.title}
                    content={news.publication.content}
                    image={news?.imageNews?.[0].image?.file}
                    categories={news.publication?.categories?.map(c => ({id: c.categories.id, name: c.categories.clasification.name, isExisting: true}))}
                    subcategories={news.publication?.subcategories?.map(c => ({id: c.subcategories.id, name: c.subcategories.clasification.name, isExisting: true}))}
                    tags={news.publication?.tags?.map(c => ({id: c.tags.id, name: c.tags.clasification.name, isExisting: true}))}
                    visible={news.publication.visible}
                    important={news.publication.important}
                />
            </>
            )
    )
}

export default Edit