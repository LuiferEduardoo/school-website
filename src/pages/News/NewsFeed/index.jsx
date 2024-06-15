import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getNews } from "../../../services/news.service";
import { getBanners } from "../../../services/banners.service";
import Banners from "../../../components/Banners";
import NewsPreview from "./NewsPreview";
import { Skeleton, Pagination } from "@nextui-org/react";

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [images, setImages] = useState(null);
    const [isLoadingNBanner, setIsLoadingBanner] = useState(true);
    const [isLoadingNews, setIsLoadingNews] = useState(true);

    const [offset, setOffset] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                const responseBanners = await getBanners(
                    null,
                    null,
                    null,
                    null,
                    "BannersNews",
                    true
                );
                setImages(
                    responseBanners.length === 0
                        ? null
                        : responseBanners.map(
                              (banner) => banner.imageBanner.image.file
                          )
                );
            } finally {
                setIsLoadingBanner(false);
            }
        };
        callToAPI();
    }, []);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                setIsLoadingNews(true);
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
                setIsLoadingNews(false);
            }
        };
        callToAPI();
    }, [offset]);

    return (
        <main className="bg-gray-100">
            <Helmet>
                <title>Noticias</title>
                <meta
                    name="description"
                    content="Mantente al día con las últimas noticias y eventos de la Escuela Ejemplo. Descubre novedades sobre nuestros programas, actividades, logros y mucho más."
                />
            </Helmet>
            <Banners
                height="h-[18rem]"
                slides={images}
                isLoading={isLoadingNBanner}
            />
            <h1 className="text-3xl font-bold tracking-tighter text-center md:text-4xl/tight mt-10">
                Noticias
            </h1>
            <>
                <section className="px-8 py-10 grid grip-cols-1 lg:grid-cols-3 gap-4">
                    {isLoadingNews
                        ? [...Array(8)].map((_, index) => (
                            <Skeleton
                                className="w-full h-[26rem] rounded-md"
                                key={index}
                            />
                        ))
                        : news.map((n) => (
                            <NewsPreview
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
        </main>
    );
};

export default NewsFeed;
