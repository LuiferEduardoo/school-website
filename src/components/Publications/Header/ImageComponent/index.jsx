import { useContext } from "react";
import { PublicationsContext } from "../..";

const ImageComponent = () => {
    const {imageUrl, imageName} = useContext(PublicationsContext);
    return (
        <div className="mb-4 w-full">
            <img
                src={imageUrl}
                alt={`${imageName ? imageName : "Image post"}`}
                className="w-full h-auto object-cover rounded"
            />
        </div>
    );
};

export default ImageComponent