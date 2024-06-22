import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getNews } from "../../../services/news.service";
import { Skeleton } from "@nextui-org/react";
import Publications from "./../../../components/Publications";
import PagesError from "../../../components/PagesError";

const Post = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorPage, setErrorPage] = useState();

    const { link } = useParams();

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setErrorPage()
                setIsLoading(true);
                const params = {
                    link,
                };
                const response = await getNews(
                    null,
                    null,
                    null,
                    null,
                    null,
                    params,
                    true
                );
                setNews(response);
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
                        <title>{news.publication.title}</title>
                        <meta
                            name="description"
                            content={news.publication.content}
                        />
                    </Helmet>
                    <Publications
                        title={news.publication.title}
                        imageUrl={news.imageNews[0].image.file}
                        imageName={news.imageNews[0].image.file.name}
                        content={news.publication.content}
                        createdAt={news.publication.createdAt}
                        timeDuration={news.publication.reading_time}
                    />
                </>
            ) : (
                <PagesError 
                    error={errorPage}
                />
            )}
        </main>
    );
};

export default Post;