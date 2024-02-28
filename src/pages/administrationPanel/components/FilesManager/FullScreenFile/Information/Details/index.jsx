import arrayDetailContent from "./arrayDetailContent"
import DetailsContent from "./DetailsContent";

const Details = (props) => {
    const file = props.files[props.selectedImage];
    return (
        <section className="flex flex-col gap-6 ">
            <div>
                <span className="text-xs">DETALLES</span>
            </div>
            {arrayDetailContent(file, file.file.fileType).map(({icon, styleComponent, children, edit, date}, index) => 
                <DetailsContent 
                    key={index}
                    index={index}
                    selectedImage={props.selectedImage}
                    icon={icon}
                    styleComponent={styleComponent}
                    edit={edit}
                    date={date}
                >
                    {children}
                </DetailsContent>
            )}
        </section>
    )
}

export default Details