import React, { useEffect } from "react";
import { FilesInput } from "./../../../components/FilesInput"

const Image = ({propsFilesInput, setIsDisabledNext}) => {
    useEffect(() => {
        if((propsFilesInput.newFiles?.[0]) || (propsFilesInput?.existingFiles?.[0]))
            setIsDisabledNext(false);
        else 
            setIsDisabledNext(true);
    }, [propsFilesInput.newFiles, propsFilesInput.existingFiles])
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