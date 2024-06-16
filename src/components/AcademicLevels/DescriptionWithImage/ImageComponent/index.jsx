import { useContext } from "react";
import { AcademicLevelsContext } from "../..";
import { isImageByElement } from "../../../../pages/administrationPanel/components/FilesInput/PreViewFiles";

const ImageComponent = () => {
    const { image, imageName } = useContext(AcademicLevelsContext);

    return (
        <div className="h-full w-full md:w-1/2 mt-4 md:mt-0">
            <img
                className="w-full h-full object-cover"
                alt={imageName ? imageName : "Imagen del nivel academico"}
                src={
                    isImageByElement(image)
                        ? URL.createObjectURL(image)
                        : image?.file?.url
                        ? image.file.url
                        : image.url
                }
            />
        </div>
    );
};

export default ImageComponent;
