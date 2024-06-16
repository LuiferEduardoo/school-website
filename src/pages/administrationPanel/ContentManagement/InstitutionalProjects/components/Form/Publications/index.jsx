import React, { useState, useEffect, useContext } from 'react';
import { useDisclosure} from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { MultiStep } from '../../../../../components/Form';
import { Image, Classifications, StatusAndFixation, MemberOrAuthor, InformationBasicPublications } from '../../../../components/Form';
import Preview from '../../../../components/Preview';
import Publications from '../../../../../../../components/Publications';
import { toast } from 'sonner';
import { AuthContext } from '../../../../../../../providers/AuthContext';
import { dataForTheAPI, emptyStates, verifyDataToUpdate } from './data';
import { postInstitutionalProjectsPublications, updateInstitutionalProjectsPublications } from '../../../../../../../services/institutionalProjectsPublication.service';

const FormPublications = (props) => {
    const { institutionalProject } = useParams();
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


    const [authors, setAuthors] = useState([]);
    const [existingAuthors, setExistingAuthors] = useState(props.authors || []);
    const [idEliminateAuthors, setEditEliminateAuthors] = useState(new Set());

    const [status, setStatus] = useState(props.visible);
    const [fixation, setFixation] = useState(props.important);
    const [isDifferent, setIsDifferent] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState();

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const [isDisabledAction, setIsDisabledAction] = useState(false);
    const [step, setStep] = useState(1);
    const image = images.concat(newImage);

    const [isLoading, setIsLoading] = useState(false);

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
                ancientAuthors: existingAuthors,
                recentAuthors: authors,
                idEliminateAuthors: [...idEliminateAuthors],
                ancientVisible: props.visible,
                recentVisible: status,
                ancientFixed: props.important,
                recentFixed: fixation,
                ancientImage: image,
                recentImage: newImage
            }, setIsDifferent);
            setDataToUpdate(verifyData);
        }
    }, [title, content, newImage, categories, subcategories, tags, idEliminateExistingCategories, idEliminateExistingSubcategories, idEliminateExistingTags, idEliminateAuthors,  idEliminateImage, authors, existingAuthors, status, fixation])
    
    const handleAction = async ()=> {
        try{
            setIsLoading(true)
            let message;
            if(props.edit){
                const response = await updateInstitutionalProjectsPublications(accessToken, setAccessToken, refreshToken, setRefreshToken, institutionalProject, props.id, dataToUpdate);
                message = response.message;
                props.setUpdatePage(true);
            } else {
                const formData = dataForTheAPI({title, content, categories, subcategories, tags, authors, images});
                const response = await postInstitutionalProjectsPublications(accessToken, setAccessToken, refreshToken, setRefreshToken, institutionalProject, formData);
                message = response.message;
                emptyStates(setStep, [{state: setTitle}, {state: setContent}, {state: setCategories, value: []}, {state: setSubcategories, value: []}, {state: setTags, value: []}, {state: setAuthors, value: []}, {state: setImages, value: []}]);
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
        },
        { 
            name: 'Authores',
            component: <MemberOrAuthor 
                author
                usersDefault={props.authors || []}
                users={authors}
                setUsers={setAuthors}
                existingUsers={existingAuthors}
                setExistingUsers={setExistingAuthors}
                idEliminateExistingUsers={idEliminateAuthors}
                setIdEliminateExistingUsers={setEditEliminateAuthors}
                publication={institutionalProject}
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

export default FormPublications