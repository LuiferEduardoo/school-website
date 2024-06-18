import { useEffect, useState } from "react";
import { getNews } from "../../../services/news.service";
import { Skeleton, Pagination } from "@nextui-org/react";
import PreviewPublications from "../../../components/PreviewPublications";

const NewsPreview = (props) => {
    const [news, setNews] = useState([]);
    const [offset, setOffset] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setIsLoading(true);
                const params = {
                    offset: offset - 1,
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
                setTotalPage(responseNews.totalPages);
                setNews(responseNews.elements);
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, [offset]);

    return (
        <>
            <section className="px-8 py-10 grid grip-cols-1 lg:grid-cols-3 gap-4">
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
            </section>
            <div className="flex justify-end mt-auto">
                {totalPage > 1 && (
                    <Pagination
                        showControls
                        total={totalPage}
                        page={offset}
                        onChange={setOffset}
                    />
                )}
            </div>
        </>
    );
};

export default NewsPreview;