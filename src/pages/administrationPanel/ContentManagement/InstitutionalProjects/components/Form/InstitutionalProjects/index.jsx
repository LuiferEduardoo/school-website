import React, { useContext, useEffect, useState } from 'react';
import { useDisclosure} from "@nextui-org/react";
import { isImageByElement } from '../../../../../components/FilesInput/PreViewFiles';
import { MultiStep } from '../../../../../components/Form';
import { Image, Classifications, StatusAndFixation, MemberOrAuthor } from '../../../../components/Form';
import InformationBasic from './InformationBasic';
import { toast } from 'sonner';
import moment from 'moment';
import dateConvert from '../../../../../../../utils/dateConvert';
import InstitutionalProyectsContent from '../../../../../../../components/InstitutionalProjects';
import Preview from '../../../../components/Preview';
import { AuthContext } from '../../../../../../../providers/AuthContext';
import { dataForTheAPI, emptyStates, verifyDataToUpdate } from './data';
import { postInstitutionalProjects, updateInstitutionalProjects } from '../../../../../../../services/institutitionalProjects.service';

const InstitutionalProjects = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);

    const [title, setTitle] = useState(props.title || '');
    const [startedAt, setStartedAt] = useState(dateConvert ? dateConvert(props.startedAt) : '');

    const [content, setContent] = useState(props.content || '');

    const [images, setImages] = useState(props.image ? [props.image] : []);
    const [idEliminateImage, setEditEliminateImage] = useState(new Set());
    const [newImage, setNewImage] = useState([]);
    
    const [categories, setCategories] = useState(props.categories || []);
    const [idEliminateExistingCategories, setIdEliminateExistingCategories] = useState(new Set());


    const [subcategories, setSubcategories] = useState(props.subcategories || []);
    const [idEliminateExistingSubcategories, setIdEliminateExistingSubcategories ] = useState(new Set());

    const [tags, setTags] = useState(props.tags || []);
    const [idEliminateExistingTags, setIdEliminateExistingTags] = useState(new Set());


    const [members, setMembers] = useState([]);
    const [existingMembers, setExistingMembers] = useState(props.members || []);
    const [idEliminateMembers, setEditEliminateMembers] = useState(new Set());

    const [status, setStatus] = useState(true);
    const [fixation, setFixation] = useState(false);
    const [isDifferent, setIsDifferent] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState();

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const [isDisabledAction, setIsDisabledAction] = useState(false);
    const [step, setStep] = useState(1);
    const image = images.concat(newImage);
    const urlImage = image?.[0] && isImageByElement(image[0]) ? URL.createObjectURL(image[0]) : image[0]?.url;

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(props.edit){
            const verifyData = verifyDataToUpdate({
                ancientTitle: props.title, 
                recentTitle: title, 
                ancientContent: props.content, 
                recentContent: content,
                recentStartedAt: startedAt,
                ancientStartedAt: dateConvert(props.startedAt),
                ancientCategories: props.categories,
                recentCategories: categories,
                ancientSubcategories: props.subcategories,
                recentSubcategories: subcategories,
                ancientTags: props.tags,
                recentTags: tags,
                idsEliminateCategories: idEliminateExistingCategories,
                idsEliminateSubcategories: idEliminateExistingSubcategories,
                idsEliminateTags: idEliminateExistingTags,
                idEliminateImage,
                ancientMembers: props.members,
                recentMembers: members,
                updateMembers: existingMembers,
                idEliminateMembers: [...idEliminateMembers],
                ancientVisible: props.visible,
                recentVisible: status,
                ancientFixed: props.fixed,
                recentFixed: fixation,
                ancientImage: image,
                recentImage: newImage
            }, setIsDifferent)
            setDataToUpdate(verifyData);
        }
    }, [title, startedAt, content, newImage, categories, subcategories, tags, idEliminateExistingCategories, idEliminateExistingSubcategories, idEliminateExistingTags, idEliminateMembers,  idEliminateImage, members, existingMembers, status, fixation])
    
    const handleAction = async ()=> {
        try{
            setIsLoading(true)
            let message;
            if(props.edit){
                const response = await updateInstitutionalProjects(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, dataToUpdate);
                message = response.message;
                props.setUpdatePage(true);
            } else {
                const formData = dataForTheAPI({title, content, categories, subcategories, tags, startedAt, members, images})
                const response = await postInstitutionalProjects(accessToken, setAccessToken, refreshToken, setRefreshToken, formData);
                message = response.message;
                emptyStates(setStep, [{state: setTitle}, {state: setContent}, {state: setCategories, value: []}, {state: setSubcategories, value: []}, {state: setTags, value: []}, {state: setMembers, value: []}, {state: setStartedAt}, {state: setImages, value: []}]);
            }
            toast.success(message);
            setStep(1)
        } catch(error){
            toast.warning(error.message);
        } finally{
            setIsLoading(false)
        }
    }

    const handleContent = (content, editor) => {
        setContent(content)
    };
    const propsFilesInput = props.edit ? {
        newFiles: newImage,
        setNewFiles: setNewImage,
        existingFiles: images,
        setExistingFiles: setImages,
        setIdEliminateExistingFiles: setEditEliminateImage,
        idEliminateExistingFiles: idEliminateImage
    } : {
        newFiles:images,
        setNewFiles:setImages
    }

    const fields = [
        { 
            name: 'Información basica', 
            component: <InformationBasic 
                title={title} 
                setTitle={setTitle} 
                startedAt={startedAt}
                setStartedAt={setStartedAt}
                content={content} 
                handleContent={handleContent}
                setIsDisabledNext={setIsDisabledNext} 
            /> 
        },
        { 
            name: 'Imagen', 
            component: <Image 
                propsFilesInput={propsFilesInput}
                setIsDisabledNext={setIsDisabledNext}
                edit={props.edit}
            />
        },
        { 
            name: 'Clasificaciones',
            component: <Classifications 
                categories={categories} 
                setCategories={setCategories} 
                idEliminateExistingCategories={idEliminateExistingCategories} 
                setIdEliminateExistingCategories={setIdEliminateExistingCategories} 
                subcategories={subcategories}
                setSubcategories={setSubcategories}
                idEliminateExistingSubcategories={idEliminateExistingSubcategories}
                setIdEliminateExistingSubcategories={setIdEliminateExistingSubcategories}
                tags={tags}
                setTags={setTags}
                idEliminateExistingTags={idEliminateExistingTags}
                setIdEliminateExistingTags={setIdEliminateExistingTags}
                edit={props.edit}
                setIsDisabledNext={setIsDisabledNext}
                setIsDisabledAction={setIsDisabledAction}
            /> 
        },
        { 
            name: 'Miembros',
            component: <MemberOrAuthor 
                users={members}
                setUsers={setMembers}
                isCoordinator
                existingUsers={existingMembers}
                usersDefault={props.members || []}
                idEliminateExistingUsers={idEliminateMembers}
                setIdEliminateExistingUsers={setEditEliminateMembers}
                setExistingUsers={setExistingMembers}
                setIsDisabledNext={setIsDisabledNext}
                setIsDisabledAction={setIsDisabledAction}
            /> 
        }
    ];
    if (props.edit) {
        fields.push({
            name: 'Estado y fijación',
            component:<StatusAndFixation 
                status={status}
                setStatus={setStatus}
                fixation={fixation}
                setFixation={setFixation}
                isDifferent={isDifferent}
                setIsDisabledAction={setIsDisabledAction}
            /> 
        });
    }
    return (
        <>
            <MultiStep 
                fields={fields}
                onOpen={onOpen}
                edit={props.edit}
                isDisabledNext={isDisabledNext}
                isDisabledAction={isDisabledAction}
                handleAction={handleAction}
                isLoading={isLoading}
                step={step}
                setStep={setStep}
                hasPreview
                style='flex flex-col gap-4'
            />

                <Preview
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <InstitutionalProyectsContent 
                        image={urlImage}
                        title={title}
                        content={content}
                    />
                </Preview>
        </>
    )
}

export default InstitutionalProjects