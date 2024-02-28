import images from './../../../../../services/images.service';
import { toast } from 'sonner';

const ViewImage = (props) => {
    const handleImageClick = (image) => {
        if(props.fileSize){
            const { width, height } = props.fileSize;
            console.log(image.width, image.height)
            if(!(image.width >= width && image.height >= height)){
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

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-4">
            {images.map((file, index) => (
                <img
                    src={file.file.url}
                    alt={file.file.name}
                    key={file.file.id}
                    className={`w-full h-auto rounded cursor-pointer ${props.clickedImages.some((clickedImage) => clickedImage.id === file.file.id) ? '' : 'opacity-50'}`}
                    onClick={() => {handleImageClick(file.file)}}
                />
            ))}
        </div>
    )
}

export default ViewImage