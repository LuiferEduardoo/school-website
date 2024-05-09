import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getAcademicLevels } from './../../../../../services/academicLevels.service.js';
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

const AcademicAndGrade = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    const [dateAcademicLevel, setDateAcademicLevel] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            try{
                setIsLoadingPage(true);
                const {elements} = await getAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken)
                setDateAcademicLevel(elements);
            } finally {
                setIsLoadingPage(false)
            }
        }
        callAPI()
    }, []);

    const onSelectionAcademicLevels = (id) => {
        props.setAcademicLevel(id);
        props.setGrade('');

    }
    return (
        <>
            <Autocomplete
                isLoading={props.isLoadingPage && isLoadingPage}
                isRequired
                label="Nivel academico"
                defaultItems={dateAcademicLevel?.map(academic => ({value: academic.id, label: academic.nameLevel}))}
                selectedKey={props.academicLevel}
                onSelectionChange={onSelectionAcademicLevels}
            >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <Autocomplete
                isLoading={props.isLoadingPage && isLoadingPage}
                isRequired
                label="Grado"
                defaultItems={
                    dateAcademicLevel
                        ?.filter(academic => academic.id === parseInt(props.academicLevel))
                        ?.map(academic => academic.schoolGrade)
                        ?.flat()
                        ?.map(grade => ({ value: grade.id, label: grade.grade }))
                }
                selectedKey={props.grade}
                onSelectionChange={props.setGrade}
            >
                {(item) => <AutocompleteItem key={item.value}>{String(item.label)}</AutocompleteItem>}
            </Autocomplete>
        </>
    );
}

export default AcademicAndGrade