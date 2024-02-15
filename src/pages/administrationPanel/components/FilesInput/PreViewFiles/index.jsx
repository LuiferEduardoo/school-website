import React, { useEffect } from 'react';
import isImageByElement from "./isImageByElement";
import Content from "./Content";

const PreViewFiles = ({typeFile, haveManyFiles, existingFiles=[], setExistingFiles, newFiles, setNewFiles, setIdEliminateExistingFiles=[], idEliminateExistingFiles}) => {
    useEffect(() => {
        if (!haveManyFiles && (newFiles.length  > 0 && existingFiles.length > 0)) {
            setExistingFiles([])
        }
    }, [newFiles, haveManyFiles]);
    return (
        <div className="mt-4 flex flex-col w-full gap-4">
            <Content 
                files={existingFiles}
                setExistingFiles={setExistingFiles}
                setNewFiles={setNewFiles}
                setIdEliminateExistingFiles={setIdEliminateExistingFiles}
                idEliminateExistingFiles={idEliminateExistingFiles}
                typeFile={typeFile}
                isExisting={true}
            />
            <Content 
                files={newFiles}
                setExistingFiles={setExistingFiles}
                setNewFiles={setNewFiles}
                setIdEliminateExistingFiles={setIdEliminateExistingFiles}
                idEliminateExistingFiles={idEliminateExistingFiles}
                typeFile={typeFile}
                isExisting={false}
            />
        </div>
    );
}
export { PreViewFiles, isImageByElement}