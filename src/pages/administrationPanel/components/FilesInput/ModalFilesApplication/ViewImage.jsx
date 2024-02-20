import images from './../../../../../services/images.service'

const ViewImage = (props) => {
    const handleImageClick = (image) => {
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
            {images.map((image, index) => (
                <img
                    src={image.url}
                    alt={image.name}
                    key={image.id}
                    className={`w-full h-auto rounded cursor-pointer ${props.clickedImages.some((clickedImage) => clickedImage.id === image.id) ? '' : 'opacity-50'}`}
                    onClick={() => {handleImageClick(image)}}
                />
            ))}
        </div>
    )
}

export default ViewImage