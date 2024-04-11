import { verifyImage } from "./verifyImage";
import { convertToFormData } from "./convertToFormData";

const verifyIfDataIsDiferente = (data, setIsDifferent, handleConvertToFormData) => {
    const dataToConvert = {}
    data.forEach(element => {
        if(((element.ancientElement != element.recentElement) && (element.recentElement !== '' && element.recentElement !== undefined)) && element.elementType !== 'image'){
            dataToConvert[element.nameField] = element.recentElement
        }
        if(element?.elementType === 'image'){
            if(element.idImageEliminate === element.recentElement?.[0]?.id){
                delete dataToConvert.idImageEliminate
            }
            if(element.ancientElement !== element.recentElement?.[0]?.id || element.recentElement?.[0]?.type?.startsWith('image/')){
                verifyImage([{
                    image: element.recentElement,
                    nameFieldIdImage: 'idNewImage'
                }], dataToConvert)
            }
        }
    })
    if(Object.getOwnPropertyNames(dataToConvert).length > 0){
        setIsDifferent(true);
        return handleConvertToFormData ? convertToFormData(dataToConvert) : dataToConvert;
    }
    setIsDifferent(false)
}

export default verifyIfDataIsDiferente