import { useContext } from "react";
import { FilesManagerContext } from "../../..";
import arrayDetailContent from "./arrayDetailContent"
import DetailsContent from "./DetailsContent";

const Details = (props) => {
    const { fileType } = useContext(FilesManagerContext)
    const file = props.files[props.selectedImage];
    return (
        <section className="flex flex-col gap-6 ">
            <div>
                <span className="text-xs">DETALLES</span>
            </div>
            {arrayDetailContent(file, fileType).map(({icon, styleComponent, children, edit, data}, index) => 
                <DetailsContent 
                    key={index}
                    index={index}
                    selectedImage={props.selectedImage}
                    icon={icon}
                    styleComponent={styleComponent}
                    edit={edit}
                    data={data}
                >
                    {children}
                </DetailsContent>
            )}
        </section>
    )
}

export default Details