import { useEffect, useState, useContext } from "react";
import { getAllBanners } from "../../../../../../services/banners.service";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { Skeleton } from "@nextui-org/react";
import CardBannerContent from "./CardBannerContent";

const CardBanner = () => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const callToAPI = async () => {
            try {
                const response = await getAllBanners(accessToken, setAccessToken, refreshToken, setRefreshToken);
                setBanners(response);
            } finally {
                setIsLoading(false);
            }
        };
        callToAPI();
    }, [accessToken, setAccessToken, refreshToken, setRefreshToken]);

    return (
        isLoading ? (
            Array(10).fill().map((_, index) => (
                <Skeleton key={index} className="w-full h-[657px] rounded-lg" />
            ))
        ) : (
            banners.map(({ title, description, endpoit, banners }) => (
                <CardBannerContent 
                    key={endpoit} // Assuming `endpoint` can serve as a unique key
                    title={title}
                    description={description}
                    endpoint={endpoit}
                    banners={banners} // Should be `banner`, not `banners`
                />
            ))
        )
    );
};

export default CardBanner;