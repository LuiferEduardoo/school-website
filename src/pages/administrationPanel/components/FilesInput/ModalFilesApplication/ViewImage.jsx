import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../../../providers/AuthContext';
import { getFiles } from '../../../../../services/files.service';
import SkeletonContent from './Skeleton'
import { toast } from 'sonner';

const ViewImage = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callAPI = async () => {
            try{
                const response = await getFiles(accessToken, setAccessToken, refreshToken, setRefreshToken, 'image');
                setImages(response.elements)
            } finally{
                setIsLoading(false)
            }
        } 
        callAPI()
    }, [])
    const handleImageClick = (image) => {
        if(props.fileSize){
            const { width, height } = props.fileSize;
            if(!(image.file.width >= width && image.file.height >= height)){
                return toast.warning(`Imagen debe tener un tamaño minimo de ${props.fileSize.width}x${props.fileSize.height} píxeles.`)
            }
        }
        // Verificar si la imagen ya fue clicada
        const isImageClicked = props.clickedImages.some((clickedImage) => clickedImage.id === image.id);
    
        // Determinar si la imagen debe ser agregada o eliminada
        const shouldAddImage =
            (!props.haveManyFiles && props.clickedImages.length === 0) || props.haveManyFiles;
    
        // Actualizar el array de imágenes clicadas
        const newClickedImages = isImageClicked
            ? props.clickedImages.filter((clickedImage) => clickedImage.id !== image.id) // Si ya fue clicada, la eliminamos
            : shouldAddImage ? [...props.clickedImages, image] // Si no ha sido clicada, la agregamos
            : props.clickedImages; // No hacer cambios si no se permite agregar más imágenes
    
        // Actualizar el estado
        props.setClickedImages(newClickedImages);
    };

    const publicImages = images.filter((file) => file.file.isPublic);

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-4">
            {isLoading ? (
                [...Array(8)].map((_, index) => (
                    <SkeletonContent key={index} />
                ))
            ) : (
                publicImages.map((file, index) => (
                    <img
                        src={file.file.url}
                        alt={file.file.name}
                        loading="lazy"
                        key={index}
                        className={`w-full h-auto rounded cursor-pointer ${props.clickedImages.some((clickedImage) => clickedImage.id === file.id) ? '' : 'opacity-50'}`}
                        onClick={() => {handleImageClick(file)}}
                    />
                ))
            )}
        </div>
    )
}

export default ViewImage