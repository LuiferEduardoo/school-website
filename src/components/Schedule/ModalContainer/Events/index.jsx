import EditOrCreate from "./EditOrCreate";
import ReadOnly from "./ReadOnly";

const Events = (props) => {

    return (
        <>
            {props.isReadOnly ? (
                <ReadOnly 
                    subject={props.select.subject}

                />
            ) : (
                <EditOrCreate 
                    academicLevel={props.academicLevel}
                    select={props.select}
                    setIsDisabled={props.setIsDisabled}
                    onOpen={props.onOpen}
                />
            )}
        </>
    );
}

export default Events;