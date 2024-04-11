const verifyImageUpdateOrUpload = (image, data, nameFieldIdImage) => {
    if(image[0]?.type?.startsWith('image/')){
        data.files = image[0]
    } else if(image[0]?.id){
        data[nameFieldIdImage] = image[0]?.id
    }
}


export const verifyImage = (files, data) => {
    files.forEach(file => {
        verifyImageUpdateOrUpload(file.image, data, file.nameFieldIdImage)
    });
}