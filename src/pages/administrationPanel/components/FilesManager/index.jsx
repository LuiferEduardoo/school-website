import React, { useState, createContext } from 'react';
import SkeletonContent from './Skeleton';
import ViewFiles from "./ViewFiles";
import SelectionPanel from "./SelectionPanel";
import FullScreenFile from './FullScreenFile';

export const FilesManagerContext = createContext();

const FilesManager = (props) => {
    return (
        props.isLoading ? (
            <SkeletonContent 
                fileType={props.fileType}
            />
        ) : (
            <FilesManagerContext.Provider value={{ 
                selectedKeys: props.selectedKeys, 
                setSelectedKeys: props.setSelectedKeys, 
                selectedImage: props.selectedImage, 
                setSelectedImage: props.setSelectedImage, 
                files: props.files,
                fileType: props.fileType, 
                acceptFiles: props.acceptFiles,
                setFiles: props.setFiles,
                setFilesApplication: props.setFilesApplication,
                otherElement: props.otherElement,
                viewInformationImage: props.viewInformationImage,
                fileSize: props.fileSize,
                handleDelete: props.handleDelete,
                updatePage: props.updatePage,
                setUpdatePage: props.setUpdatePage
                }} 
            >
                <section className="grid grid-cols-1 gap-4 w-full">
                    <SelectionPanel />
                    <ViewFiles />
                    <FullScreenFile />
                </section>
            </FilesManagerContext.Provider>
        )
    )
}

export default FilesManager