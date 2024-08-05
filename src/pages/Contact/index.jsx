import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getBanners } from "../../services/banners.service";
import Banners from "../../components/Banners";
import Content from "./Content";

const Contact = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callAPI = async() => {
            try {
                setIsLoading(true);
                const response = await getBanners(null, null, null, null, "BannersContact", true);
                setImages(response.length === 0 ? null : response.map(banner => banner.imageBanner.image.file));
            } finally{
                setIsLoading(false);
            }
        }
        callAPI()
    }, []);
    return (
        <main className="bg-gray-100">
            <Helmet>
                <title>Contacto</title>
                <meta name="description" content="Ponte en contacto con nosotros para obtener más información sobre nuestros programas educativos, inscripciones, y cualquier otra consulta que puedas tener." />
            </Helmet>
            <Banners 
                height="h-[20rem]"
                slides={images}
                isLoading={isLoading}
            />
            <Content />
        </main>
    )
}

export default Contact