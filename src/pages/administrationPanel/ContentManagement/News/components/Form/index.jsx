import React, { useContext, useState, useEffect } from 'react';
import { useDisclosure} from "@nextui-org/react";
import {InformationBasicPublications, StatusAndFixation} from '../../../components/Form';
import { Image, Classifications } from '../../../components/Form';
import { MultiStep } from '../../../../components/Form';
import Preview from './../../../components/Preview';
import Publications from './../../../../../../components/Publications';
import { toast } from 'sonner';
import { AuthContext } from '../../../../../../providers/AuthContext';
import { dataForTheAPI, emptyStates, verifyDataToUpdate } from './data';
import { postNews, updateNews } from '../../../../../../services/news.service';

const Form = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [title, setTitle] = useState(props.title || '');

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


    const [status, setStatus] = useState(props.visible);
    const [fixation, setFixation] = useState(props.important);
    const [isDifferent, setIsDifferent] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const [isDisabledAction, setIsDisabledAction] = useState(false);
    const [step, setStep] = useState(1);
    const image = images.concat(newImage);

    useEffect(() => {
        if(props.edit){
            const verifyData = verifyDataToUpdate({
                ancientTitle: props.title, 
                recentTitle: title, 
                ancientContent: props.content, 
                recentContent: content,
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
                ancientVisible: props.visible,
                recentVisible: status,
                ancientFixed: props.important,
                recentFixed: fixation,
                ancientImage: image,
                recentImage: newImage
            }, setIsDifferent);
            setDataToUpdate(verifyData);
        }
    }, [title, content, newImage, categories, subcategories, tags, idEliminateExistingCategories, idEliminateExistingSubcategories, idEliminateExistingTags,  idEliminateImage, status, fixation])

    const handleContent = (content, editor) => {
        setContent(content)
    };
    const handleAction = async ()=> {
        try{
            setIsLoading(true)
            let message;
            if(props.edit){
                const response = await updateNews(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, dataToUpdate);
                message = response.message;
                props.setUpdatePage(true);
            } else {
                const formData = dataForTheAPI({title, content, categories, subcategories, tags, images})
                const response = await postNews(accessToken, setAccessToken, refreshToken, setRefreshToken, formData);
                message = response.message;
                emptyStates(setStep, [{state: setTitle}, {state: setContent}, {state: setCategories, value: []}, {state: setSubcategories, value: []}, {state: setTags, value: []}, {state: setImages, value: []}]);
            }
            toast.success(message);
            setStep(1)
        } catch(error){
            toast.warning(error.message);
        } finally{
            setIsLoading(false)
        }
    }
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
            component: <InformationBasicPublications 
                title={title} 
                setTitle={setTitle}
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
                    <Publications 
                        imageUrl={image[0]}
                        title={title}
                        content={content}
                    />
                </Preview>
        </>
    )
}

export default Form