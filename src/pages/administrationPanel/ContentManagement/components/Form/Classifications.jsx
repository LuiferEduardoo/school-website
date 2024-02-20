import React, { useEffect } from "react";
import PublicationClassifications from "../PublicationClassifications";

const Classifications = (props) => {
    useEffect(() => {
        const setDisable = (status) => props.edit ? props.setIsDisabledNext(status) : props.setIsDisabledAction(status);
        if (props.categories.length === 0 && props.subcategories.length === 0 && props.tags.length === 0) 
            setDisable(true);
        else if (props.categories.length === 0 && (props.subcategories.length > 0 || props.tags.length > 0))
            setDisable(true);
        else 
            setDisable(false);
    }, [props.categories, props.subcategories, props.tags, props.edit]);
    return (
        <>
            <PublicationClassifications 
                categories={props.categories}
                setCategories={props.setCategories}
                idEliminateExistingCategories={props.idEliminateExistingCategories}
                setIdEliminateExistingCategories={props.setIdEliminateExistingCategories}
                subcategories={props.subcategories}
                setSubcategories={props.setSubcategories}
                idEliminateExistingSubcategories={props.idEliminateExistingSubcategories}
                setIdEliminateExistingSubcategories={props.setIdEliminateExistingSubcategories}
                tags={props.tags}
                setTags={props.setTags}
                idEliminateExistingTags={props.idEliminateExistingTags}
                setIdEliminateExistingTags={props.setIdEliminateExistingTags}
            />
        </>
    )
}

export default Classifications