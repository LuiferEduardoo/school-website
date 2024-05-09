import { verifyImage } from "./verifyImage";
import { convertToFormData } from "./convertToFormData";

const verifyIfDataIsDiferente = (data, setIsDifferent, handleConvertToFormData) => {
    const dataToConvert = {}
    data.forEach(element => {
        const verifyIfEmpty = element.canBeEmpty ? true : (element.recentElement !== '' && element.recentElement !== undefined);
        if(((element.ancientElement != element.recentElement) && verifyIfEmpty) && (element.elementType !== 'image' && element?.elementType !== 'classification' && element?.elementType !== 'membersOrAuthor')){
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
        if (element?.elementType === 'membersOrAuthor') {
            let data = [];
            element.recentElement?.forEach((recent, index) => {
                const recentIsCoodinator = recent?.isCoordinator;
                const ancientCoordinator = element?.ancientElement[index]?.isCoordinator;
                const action = element?.action
                if ((recentIsCoodinator !== ancientCoordinator) && (action === 'updateCoordinator')) {
                    data.push({ id: recent.id, isCoordinator: recent.isCoordinator });
                }
                if(recent && action === 'update') {
                    const elementObjectsIsCoordinator = element.haveCoordinator ? {isCoordinator: recentIsCoodinator} : {}
                    data.push({ id: recent.id, ...elementObjectsIsCoordinator });
                }
            });
            if (data.length > 0) {
                if(element?.action === 'updateCoordinator' || element?.action === 'update'){
                    dataToConvert[element.nameFieldOne] = data.map(d => d.id).join(',');
                    if(element.haveCoordinator){
                        dataToConvert[element.nameFielTwo] = data.map(d => d.isCoordinator).join(',');
                    }
                }
            }
        }        
        if(element?.elementType === 'classification'){
            const data = []
            element.recentElement.forEach(recent => {
                const verifyExisting = element.ancientElement.map(e => e.name).includes(recent.name);
                if(!verifyExisting){
                    data.push(recent.name);
                }
            })
            if(data.length > 0){
                dataToConvert[element.nameField] = data.join('')
            }
        }
    })
    if(Object.getOwnPropertyNames(dataToConvert).length > 0){
        setIsDifferent(true);
        return handleConvertToFormData ? convertToFormData(dataToConvert) : dataToConvert;
    }
    setIsDifferent(false);
    return dataToConvert;
}

export default verifyIfDataIsDiferente