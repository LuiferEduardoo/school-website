import { useContext } from "react";
import { PublicationsContext } from "../..";
import { isImageByElement } from "../../../../pages/administrationPanel/components/FilesInput/PreViewFiles";

const ImageComponent = () => {
    const {imageUrl, imageName} = useContext(PublicationsContext);
    return (
        <div className="mb-4 w-full">
            <img
                src={
                    isImageByElement(imageUrl)
                        ? URL.createObjectURL(imageUrl)
                        : imageUrl?.file?.url
                        ? imageUrl.file.url
                        : imageUrl.url
                }
                alt={`${imageName ? imageName : "Image post"}`}
                className="w-full h-auto object-cover rounded"
            />
        </div>
    );
};

export default ImageComponent