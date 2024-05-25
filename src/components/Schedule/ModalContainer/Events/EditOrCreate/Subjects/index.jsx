import { useState, useEffect, useContext } from "react";
import { ScheduleContext } from "../../../..";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { getSubjects } from "../../../../../../services/subjects.service";
import { Select, SelectItem } from "@nextui-org/react";

const Subjects = (props) => {
    const {academicLevel} = useContext(ScheduleContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);

    const [subjects, setSubjects] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            setIsLoading(true);
            try{
                const response = await getSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, [...academicLevel]?.[0]);
                setSubjects(response.elements);
            } finally {
                setIsLoading(false);
            }
        }
        callToAPI();
    }, [])
    return (
        <>
            <Select
                isLoading={isLoading && props.isLoading}
                items={subjects}
                selectedKeys={props.subject}
                isRequired
                label="Asignatura"
                variant="bordered"
                className="w-full"
                onSelectionChange={props.setSubject}
            >
                {(subject) => <SelectItem key={subject.id} textValue={`${subject.subjectName.name} - ${subject.teacher.name} ${subject.teacher.lastName}`}>{`${subject.subjectName.name} - ${subject.teacher.name} ${subject.teacher.lastName}`}</SelectItem>}
            </Select>
        </>
    )
}

export default Subjects