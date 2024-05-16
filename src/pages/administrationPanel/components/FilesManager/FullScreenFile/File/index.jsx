import React from 'react';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { FilesManagerContext } from '../..';
import { getFile } from "../../../../../../services/files.service";
import getFileCategory from '../../../../../../utils/getFileCategory';
import Image from './Image';
import Document from './Document';
import Multimedia from './Multimedia';
import Audio from './Audio';
import {CircularProgress} from "@nextui-org/progress";

const COMPONENTS_MAP = {
    'image': Image,
    'document': Document,
    'multimedia': Multimedia,
    'audio': Audio
};

const File = React.memo((props) => {
    const {updatePage, files} = useContext(FilesManagerContext);
    const file = files?.[props.selectedImage]?.file;
    const Component = COMPONENTS_MAP[getFileCategory(file?.fileType)];

    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [fileBlob, setFileBlob] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchImage = async () => {
            if(!updatePage){
                try {
                    setIsLoading(true);
                    const response = await getFile(accessToken, setAccessToken, refreshToken, setRefreshToken, file.url, file.isPublic)
                    setFileBlob(response); // Establecer el Blob de imagen en el estado
                } finally{
                    setIsLoading(false)
                }
            }
        };
        fetchImage();
    }, [updatePage]);
    return (
        (isLoading && updatePage) ? (
            <CircularProgress size="lg" aria-label="Loading..."/>
        ) : (
            <Component 
                url={file.url}
                blob={fileBlob && URL.createObjectURL(fileBlob)} 
                alt={file.name}
                extent={file.ext}
                isPublic={file.isPublic}
                accessToken={accessToken}
            />
        )
    );
});

export default File;