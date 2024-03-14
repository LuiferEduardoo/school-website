import ButtonSave from "./ButtonSave";
import ButtonClose from "./ButtonClose"
import ButtonDelete from "./ButtonDelete";

const Footer = (props) => {
    return (
        <>
            {props.clickButton === 'event' && !props.isReadOnly && (
                <>
                    <ButtonClose onClose={props.onClose}/>
                    {props.id && (
                        <ButtonDelete />
                    )}
                    <ButtonSave onClose={props.onClose} isDisabled={props.isDisabled}/>
                </>
            )}
        </>
    )
}

export default Footer