import {useNavigate } from 'react-router-dom';
import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";
import Banners from "../../../../../components/Banners";

const CardBanner = (props) => {
    const navigate = useNavigate();
    const handleEdit = (endpoint) => {
        navigate(`edit/${endpoint}`);
    }
    const slides = props.banners.length > 0 ? props.banners.map((banner) => banner.imageBanner.image.file.url) : null;
    return (
        <Card className="w-full p-4">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div>
                    <h1 className="text-xl font-semibold">{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div className="mt-2 text-right ml-auto md:mt-0">
                    <Button 
                        color="primary"
                        onPress={() => handleEdit(props.endpoint)}
                    >
                        Editar
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Banners
                    height='h-[480px]'
                    styleImage='rounded-lg'
                    slides={slides}
                />
            </CardBody>
        </Card>
    )
}

export default CardBanner