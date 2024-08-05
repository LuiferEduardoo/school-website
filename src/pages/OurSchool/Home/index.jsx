import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banners from "../../../components/Banners";
import { getBanners } from "../../../services/banners.service";
import We from "./We";
import HistoricalReview from "./HistoricalReview";
import InstitutionalHorizon from "./InstitutionalHorizon";

const Home = () => {
    const [images, setImages] = useState([]);
    const [isLoadingNBanner, setIsLoadingBanner] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                const responseBanners = await getBanners(
                    null,
                    null,
                    null,
                    null,
                    "BannersOurSchool",
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
        <main className="h-full">
            <Helmet>
                <title>Nuestro colegio</title>
                <meta
                    name="description"
                    content="Descubre más sobre la Escuela Ejemplo, nuestra misión, visión, valores y la historia que nos ha llevado a ser una institución educativa de referencia."
                />
            </Helmet>
            <Banners
                height="h-[18rem]"
                slides={images}
                isLoading={isLoadingNBanner}
            />
            <We />
            <HistoricalReview />
            <InstitutionalHorizon />
        </main>
    )
}

export default Home