import ButtonSave from "./ButtonSave";
import ButtonClose from "./ButtonClose"
import ButtonDelete from "./ButtonDelete";

const Footer = (props) => {
    return (
        <section className="flex gap-3">
            <ButtonClose onClose={props.onClose}/>
            {props.id && (
                <ButtonDelete 
                    id={props.id}
                />
            )}
            <ButtonSave
                subject={props.subject}
                dayWeek={props.dayWeek}
                startTime={props.startTime}
                endTime={props.endTime}
                onClose={props.onClose} 
                isDisabled={props.isDisabled} 
                id={props.id}
                setIsDifferent={props.setIsDifferent}
                schedule={props.schedule}
            />
        </section>
    )
}

export default Footer