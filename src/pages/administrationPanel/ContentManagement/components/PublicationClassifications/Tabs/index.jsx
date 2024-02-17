import { Tabs, Tab } from "@nextui-org/react";
import { MdOutlineCategory } from "react-icons/md";
import { BsSubstack } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import InputClassification from "../InputClassification";

const TabsContainer = (props) => {
    return (
        <Tabs aria-label="Options" color="primary">
        <Tab
            key="categories"
            title={
            <div className="flex items-center space-x-2">
                <MdOutlineCategory />
                <span>Categorias *</span>
            </div>
            }
        >
            <InputClassification 
                classifications={props.categories}
                IdEliminateExistingClassification={props.idEliminateExistingCategories}
                setIdEliminateExistingClassification={props.setIdEliminateExistingCategories}
                setClassifications={props.setCategories}
            />
        </Tab>
        <Tab
            key="subcategories"
            title={
            <div className="flex items-center space-x-2">
                <BsSubstack />
                <span>Subcategorias</span>
            </div>
            }
        >
            <InputClassification 
                classifications={props.subcategories}
                IdEliminateExistingClassification={props.idEliminateExistingSubcategories}
                setIdEliminateExistingClassification={props.setIdEliminateExistingSubcategories}
                setClassifications={props.setSubcategories}
            />
        </Tab>
        <Tab
            key="tags"
            title={
            <div className="flex items-center space-x-2">
                <IoIosPricetags />
                <span>Tags</span>
            </div>
            }
        >
            <InputClassification 
                classifications={props.tags}
                IdEliminateExistingClassification={props.idEliminateExistingTags}
                setIdEliminateExistingClassification={props.setIdEliminateExistingTags}
                setClassifications={props.setTags}
            />
        </Tab>
        </Tabs>
    );
};

export default TabsContainer;