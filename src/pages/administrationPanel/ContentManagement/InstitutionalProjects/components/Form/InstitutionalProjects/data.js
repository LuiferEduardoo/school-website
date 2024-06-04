import { convertToFormData } from "../../../../../../../utils/convertToFormData";
import { verifyImage } from '../../../../../../../utils/verifyImage';
import verifyIfDataIsDiferente from '../../../../../../../utils/verifyIfDataIsDiferente';
import formart from "../../../../../../../utils/formartIdsEliminateClassification";
import moment from 'moment';
import dateConvert from '../../../../../../../utils/dateConvert';

const emptyStates = (setStep, states) => {
    setStep(1); 
    states.forEach(element => {
        element.state(element.value || '');
    });
}

const dataForTheAPI = (states) => {
    let data = {
        title: states.title,
        content: states.content,
        categories: states.categories.map(c => c.name).join(','),
        startedAt: moment(states.startedAt).format('YYYY-MM-DDTHH:mm'),
        members: states.members.map(m => m.id).join(','),
        isCoordinator: states.members.map(c => c.isCoordinator).join(',')
    }
    if(states.subcategories.length > 0){
        data.subcategories = states.subcategories.map(c => c.name).join(',')
    }
    if(states.tags.length > 0){
        data.tags = states.tags.map(c => c.name).join(',')
    }
    const files = [{
        image: states.images,
        nameFieldIdImage: 'idImage'
    }]
    verifyImage(files, data)
    return convertToFormData(data);
}

const verifyDataToUpdate = (states, setIsDifferent) => verifyIfDataIsDiferente([
    {ancientElement: states.ancientTitle, recentElement: states.recentTitle, nameField: 'title'}, 
    {ancientElement: states.ancientContent, recentElement: states.recentContent, nameField: 'content'},
    {ancientElement: states.ancientStartedAt, recentElement: moment(states.recentStartedAt).format('YYYY-MM-DD'), nameField: 'startedAt'},
    {ancientElement: states.ancientCategories, recentElement: states.recentCategories, nameField: 'categories', elementType: 'classification',},
    {ancientElement: states.ancientSubcategories, recentElement: states.recentSubcategories, nameField: 'subcategories', elementType: 'classification'},
    {ancientElement: states.ancientTags, recentElement: states.recentTags, nameField: 'tags', elementType: 'classification'},
    {ancientElement: '', recentElement: formart(states.idsEliminateCategories), nameField: 'idsEliminateCategories'},
    {ancientElement: '', recentElement: formart(states.idsEliminateSubcategories), nameField: 'idsEliminateCategories'},
    {ancientElement: '', recentElement: formart(states.idsEliminateTags), nameField: 'idsEliminateTags'},
    {ancientElement: '', recentElement: [...states.idEliminateImage]?.[0], nameField: 'idImageEliminate'},
    {ancientElement: states.ancientMembers, recentElement: states.recentMembers, nameFieldOne: 'idsNewMembers', nameFielTwo: 'isCoordinator', elementType: 'membersOrAuthor', action: 'update', haveCoordinator: true},
    {ancientElement: states.ancientMembers, recentElement: states.updateMembers, nameFieldOne: 'updateMembers', nameFielTwo: 'updateIsCoordinator', elementType: 'membersOrAuthor', action: 'updateCoordinator'},
    {ancientElement: '', recentElement: formart(states.idEliminateMembers.map(id => id.id)), nameField: 'idsEliminateMembers'},
    {ancientElement: states.ancientVisible, recentElement: states.recentVisible, nameField: 'visible'},
    {ancientElement: states.ancientFixed, recentElement: states.recentFixed, nameField: 'important'},
    {ancientElement: states.ancientImage?.id, recentElement: states.recentImage, elementType: 'image', idImageEliminate: [...states.idEliminateImage]?.[0] },
], setIsDifferent)

export {emptyStates, dataForTheAPI, verifyDataToUpdate}