import { Card } from "@nextui-org/react";
import truncateHTML from "./../truncateContent";

const ProjectComponent = (props) => {
    return (
        <Card className="my-8 p-4">
            <div>
                <img
                    alt="Card background"
                    className="object-cover rounded-xl w-full h-[200px]"
                    src={props.image}
                />
            </div>
            <div className="overflow-visible py-2">
                <h3 className="text-lg font-bold">{props.title}</h3>
                <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                        __html: truncateHTML(props.content, 100),
                    }}
                />
            </div>
            {props.children}
        </Card>
    );
};

export default ProjectComponent;