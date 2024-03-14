import { Select, SelectItem } from "@nextui-org/react";
import subjectsService from "../../../../../services/subjects.service";

const Subjects = (props) => {
    return (
        <>
            <Select
                items={subjectsService.filter(subject => subject.academicLevelId === parseInt(props.academicLevel))}
                isRequired
                label="Asignatura"
                variant="bordered"
                className="w-full"
                onSelectionChange={props.setSubject}
            >
                {(subject) => <SelectItem key={subject.id} textValue={`${subject.name} - ${subject.teacher.name} ${subject.teacher.lasTname}`}>{`${subject.name} - ${subject.teacher.name} ${subject.teacher.lasTname}`}</SelectItem>}
            </Select>
        </>
    )
}

export default Subjects