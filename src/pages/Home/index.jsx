import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBanners } from "../../services/banners.service";
import Banners from "../../components/Banners";
import NewsPreview from "./NewsPreview";
import InstitutionalProyectsPreviewComponent from "./InstitutionalProyectsPreview";
import InstitutionalProjectsPublicationsPreview from "./InstitutionalProjectsPublicationsPreview";

const Home = () => {
    const [images, setImages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callAPI = async() => {
            try {
                setIsLoading(true);
                const response = await getBanners(null, null, null, null, "BannersHome", true);
                setImages(response.length === 0 ? null : response.map(banner => banner.imageBanner.image.file));
            } finally{
                setIsLoading(false);
            }
        }
        callAPI()
    }, []);
    return (
        <main>
            <Helmet>
                <title>IE María Inmaculada</title>
                <meta name="description" content="Bienvenido a la Institución Educativa María Inmaculada. Ofrecemos una educación integral y de calidad desde la educación inicial hasta la secundaria. Descubre nuestros programas, actividades y cómo formar parte de nuestra comunidad educativa." />
            </Helmet>
            <Banners 
                height="h-[20rem]"
                slides={images}
                isLoading={isLoading}
            />
            <NewsPreview />
            <InstitutionalProyectsPreviewComponent />
            <InstitutionalProjectsPublicationsPreview />
        </main>
    )
}

export default Home