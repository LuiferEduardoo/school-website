import React, { useEffect } from "react";
import { Input} from "@nextui-org/react";
import EditorText from '../../../../components/EditorText';

const InformationBasic = (prosp) => {
    useEffect(() => {
        if (!prosp.title && !prosp.content)
            prosp.setIsDisabledNext(true);
        else 
            prosp.setIsDisabledNext(false);
    }, [prosp.title, prosp.content, prosp.setIsDisabledNext]);
    return (
        <>
            <Input 
                isRequired 
                type="text" 
                label="Titulo" 
                value={prosp.title} 
                onChange={(e) => prosp.setTitle(e.target.value)} 
                defaultValue={prosp.title} 
            />
            <div>
                <span className="text-gray-500 text-sm m-1">Contenido *</span>
                <EditorText onChangeContent={prosp.handleContent} content={prosp.content} /> 
            </div>
        </>
    )
}

export default InformationBasic