import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBanners } from "../../../services/banners.service";
import Banners from "../../../components/Banners";
import InstitutionalProyectsPreview from "../../../components/InstitutionalProyectsPreview"

const InstitutionalProjectsFeed = () => {
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
                    "BannersInstitutionalProjects",
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
    return(
        <main className="bg-gray-100">
            <Helmet>
                <title>Proyectos Institucionales</title>
                <meta
                    name="description"
                    content="Conoce los proyectos institucionales de la Institución Educativa María Inmaculada. Descubre nuestras iniciativas y programas que fomentan el desarrollo educativo, social y cultural de nuestra comunidad."
                />
            </Helmet>
            <Banners
                height="h-[18rem]"
                slides={imageBanner}
                isLoading={isLoading}
            />
            <section className="space-y-2 px-8">
                <h1 className="text-3xl font-bold tracking-tighter text-center md:text-4xl/tight mt-10">
                    Proyectos Institucionales
                </h1>
                <p className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Descubre los proyectos destacados de nuestra escuela y cómo están impactando a la comunidad.
                </p>
            </section>
            <InstitutionalProyectsPreview />
        </main>
    )
}

export default InstitutionalProjectsFeed