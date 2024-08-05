import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBanners } from "../../../services/banners.service";
import Banners from "../../../components/Banners";
import Information from "./Information";
import Stages from "./Stages";
import FrequentQuestions from "./FrequentQuestions";

const InformationAdmissions = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const callAPI = async() => {
            try {
                const response = await getBanners(null, null, null, null, "BannersAdmissions", true);
                setImages(response.length === 0 ? null : response.map(banner => banner.imageBanner.image.file));
            } finally{
                setIsLoading(false);
            }
        }
        callAPI();
    }, []);

    return (
        <main>
            <Helmet>
                <title>Admisiones</title>
                <meta name="description" content="Conoce el proceso de admisiones de nuestra escuela. Descubre los requisitos, fechas importantes y cómo aplicar para formar parte de nuestra comunidad educativa." />
            </Helmet>
            <Banners 
                height="h-[25rem]"
                slides={images}
                isLoading={isLoading}
            />
            <Information />
            <Stages />
            <FrequentQuestions />
        </main>
    )
}

export default InformationAdmissions