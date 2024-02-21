import React, { useState } from 'react';
import { useDisclosure} from "@nextui-org/react";
import { isImageByElement } from './../../../../components/FilesInput/PreViewFiles'
import InformationBasic from './InformationBasic';
import { Image, Classifications } from '../../../components/Form';
import StatusAndFixation from './StatusAndFixation';
import { MultiStep } from '../../../../components/Form';
import Preview from './../../../components/Preview';
import Publications from './../../../../../../components/Publications'

const Form = ({edit}) => {
    const [title, setTitle] = useState('');

    const [content, setContent] = useState();

    const [images, setImages] = useState([]);
    const [idEliminateImage, setEditEliminateImage] = useState(new Set());
    const [newImage, setNewImage] = useState([]);
    
    const [categories, setCategories] = useState([]);
    const [idEliminateExistingCategories, setIdEliminateExistingCategories] = useState([]);

    const [subcategories, setSubcategories] = useState([]);
    const [idEliminateExistingSubcategories, setIdEliminateExistingSubcategories ] = useState([]);

    const [tags, setTags] = useState([]);
    const [idEliminateExistingTags, setIdEliminateExistingTags] = useState([]);

    const [status, setStatus] = useState(true);
    const [fixation, setFixation] = useState(false);
    const [isDifferent, setIsDifferent] = useState(false)

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isDisabledNext, setIsDisabledNext] = useState(false)
    const [isDisabledAction, setIsDisabledAction] = useState(false)
    const image = images.concat(newImage);
    const urlImage = image?.[0] && isImageByElement(image[0]) ? URL.createObjectURL(image[0]) : image[0]?.url

    const handleContent = (content, editor) => {
        setContent(content)
    };
    const propsFilesInput = edit ? {
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
                edit={edit}
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
                edit={edit}
                setIsDisabledNext={setIsDisabledNext}
                setIsDisabledAction={setIsDisabledAction}
            /> 
        }
    ];
    if (edit) {
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
                edit={edit}
                isDisabledNext={isDisabledNext}
                isDisabledAction={isDisabledAction}
                style='flex flex-col gap-4'
            />

                <Preview
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <Publications 
                        imageUrl={urlImage}
                        title={title}
                        content={content}
                    />
                </Preview>
        </>
    )
}

export default Form