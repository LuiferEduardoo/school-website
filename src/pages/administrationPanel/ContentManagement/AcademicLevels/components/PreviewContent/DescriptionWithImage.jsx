import {Image} from "@nextui-org/react";
import { isImageByElement } from './../../../../components/FilesInput/PreViewFiles'

const DescriptionWithImage = ({nameLevel, description, image }) => {
    return (
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
                <h2 className="text-xl font-semibold mb-4">{`¿Por qué estudiar ${nameLevel} en María Inmaculada?`}</h2>
                <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="w-full h-full">
                    <img
                        className='w-full h-full object-cover'
                        alt={`Imagen de ${nameLevel}`}
                        src={image?.[0] && isImageByElement(image[0]) ? URL.createObjectURL(image[0]) : image[0]?.url}
                    />
                </div>
            </div>
        </div>
    )
}

export default DescriptionWithImage