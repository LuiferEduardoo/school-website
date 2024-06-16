import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banners from "../../../components/Banners";
import { getBanners } from "../../../services/banners.service";
import AcademicLevelsPreview from "./AcademicLevelsPreview";

const AcademicLevelsFeed = () => {
    const [imageBanner, setImageBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                const responseBanners = await getBanners(
                    null,
                    null,
                    null,
                    null,
                    "BannersAcademicLevels",
                    true
                );
                setImageBanner(
                    responseBanners.length === 0
                        ? null
                        : responseBanners.map(
                            (banner) => banner.imageBanner.image.file
                        )
                );
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, []);

    return (
        <main>
            <Helmet>
                <title>Niveles Academicos</title>
                <meta
                    name="description"
                    content="Explora los diferentes niveles académicos que ofrece la Escuela Ejemplo, desde educación inicial hasta educación secundaria. Conoce nuestros programas educativos y cómo fomentamos el desarrollo integral de nuestros estudiantes."
                />
            </Helmet>
            <Banners
                height="h-[18rem]"
                slides={imageBanner}
                isLoading={isLoading}
            />
            <h1 className="text-3xl font-bold tracking-tighter text-center md:text-4xl/tight mt-10">
                Niveles Academicos
            </h1>
            <AcademicLevelsPreview /> 
        </main>
    )
}

export default AcademicLevelsFeed