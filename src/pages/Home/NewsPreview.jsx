import { useEffect, useState } from "react";
import { getNews } from "../../services/news.service";
import { Skeleton } from "@nextui-org/react";
import PreviewPublications from "../../components/PreviewPublications";

const NewsPreview = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setIsLoading(true);
                const params = {
                    limit: 6,
                    important: true
                };
                const responseNews = await getNews(
                    null,
                    null,
                    null,
                    null,
                    null,
                    params,
                    true
                );
                setNews(responseNews.elements);
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, []);

    return (
        <section>
            {news.length > 0 && (
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Noticias Destacadas</h2>
            )}
            <div className="px-8 py-10 grid grip-cols-1 lg:grid-cols-3 gap-4">
                {isLoading
                    ? [...Array(8)].map((_, index) => (
                        <Skeleton
                            className="w-full h-[26rem] rounded-md"
                            key={index}
                        />
                    ))
                    : news.map((n) => (
                        <PreviewPublications
                            key={n.id}
                            image={n.imageNews[0].image.file.url}
                            title={n.publication.title}
                            content={n.publication.content}
                            createdAt={n.publication.createdAt}
                            link={n.publication.link}
                        />
                    ))}
            </div>
        </section>
    )
}

export default NewsPreview