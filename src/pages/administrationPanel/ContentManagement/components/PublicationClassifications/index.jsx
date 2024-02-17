import React, {useState } from 'react';
import TabsContainer from "./Tabs"

const PublicationClassifications = (props) => {
    return (
        <>
            <TabsContainer
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

export default PublicationClassifications