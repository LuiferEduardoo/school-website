import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import truncateHTML from './../truncateContent'

const PublicationComponent = (props) => {
    return (
        <>
            <Card className="pb-4 w-full">
                <img
                    alt="Card background"
                    className="object-cover rounded-t-lg w-full h-[200px]"
                    src={props.image}
                />
                <CardBody className="overflow-visible py-2">
                    <h4 className="text-md font-semibold">{props.title}</h4>
                    <div className='prose' dangerouslySetInnerHTML={{ __html: truncateHTML(props.content, 100) }} />
                </CardBody>
            </Card>
        </>
    )
}

export default PublicationComponent