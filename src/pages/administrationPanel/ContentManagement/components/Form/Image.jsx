import React, { useEffect } from "react";
import { FilesInput } from "./../../../components/FilesInput"

const Image = ({propsFilesInput, setIsDisabledNext, edit}) => {
    useEffect(() => {
        if(!propsFilesInput.newFiles?.[0])
            setIsDisabledNext(true);
        else if(!propsFilesInput?.existingFiles && edit)
            setIsDisabledNext(true);
        else 
            setIsDisabledNext(false);
    }, [propsFilesInput.newFiles, propsFilesInput?.existingFiles])
    return (
        <>
            <FilesInput 
                typeFile='image'
                {...propsFilesInput}
            />
        </>
    )
}

export default Image