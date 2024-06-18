import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBanners } from "../../../services/banners.service";
import Banners from "../../../components/Banners";
import NewsPreview from "./NewsPreview"

const NewsFeed = () => {
    const [images, setImages] = useState(null);
    const [isLoadingNBanner, setIsLoadingBanner] = useState(true);

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
            <NewsPreview/>
        </main>
    );
};

export default NewsFeed;
