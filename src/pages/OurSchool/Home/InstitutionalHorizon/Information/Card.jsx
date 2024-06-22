import {Card, CardHeader, CardBody} from "@nextui-org/react";

const CardContent = (props) => {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{props.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-sm text-gray-500">
                {props.description}
            </CardBody>
        </Card>
    )
} 

export default CardContent