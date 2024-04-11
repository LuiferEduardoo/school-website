import { verifyImage } from '../../../../../../../utils/verifyImage';
import { convertToFormData } from '../../../../../../../utils/convertToFormData';

const campus = [
    {label: 'María Inmaculada', value: 1},
    {label: 'María Auxiliadora', value: 2}
]
const educationalDay = [
    {label: 'Mañana', value: 'Mañana'},
    {label: 'Tarde', value: 'Tarde'},
    {label: 'Noche', value: 'Noche'},
    {label: 'Flexible', value: 'Flexible'}
]
const modality = [
    {label: 'Presencial', value: 'Presencial'},
    {label: 'Virtual', value: 'Virtual'},
]

const emptyStates = (setStep, states) => {
    setStep(1); 
    states.forEach(element => {
        element.state(element.value || '');
    });
}

const dataForTheAPI = (states) => {
    let data = {
        nameLevel: states.name,
        description: states.description,
        levelCode: states.code,
        campusNumber: states.valueCampus.currentKey,
        educationDay: states.valueEducationalDay.currentKey,
        modality: states.valueModality.currentKey,
        educationalObjectives: states.educationObjectives,
        admissionRequirements: states.admissionRequirements
    }
    const files = [{
        image: states.images,
        nameFieldIdImage: 'idImage'
    }]
    verifyImage(files, data)
    return convertToFormData(data);
}

export {campus, educationalDay, modality, emptyStates, dataForTheAPI}