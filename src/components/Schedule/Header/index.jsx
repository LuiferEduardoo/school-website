import ButtonAddAndCreate from "./ButtonAddAndCreate";
import Selects from "./Selects";

const Header = (props) => {
    return (
        <header className="flex flex-col gap-4 mb-4 sm:flex-row justify-between">
            <Selects 
                academicLevel={props.academicLevel}
                setAcademicLevel={props.setAcademicLevel}
                grade={props.grade}
                setGrade={props.setGrade}
                course={props.course}
                setCourse={props.setCourse}
            />
            {!props.isReadOnly && (
                <ButtonAddAndCreate 
                    academicLevel={props.academicLevel}
                    grade={props.grade}
                    course={props.course}
                    setClickButton={props.setClickButton}
                    onOpen={props.onOpen}
                />
            )}
        </header>
    )
}

export default Header