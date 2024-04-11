import React, { useEffect, useState, useContext } from 'react';
import { Input, Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { AuthContext } from '../../../../../../../providers/AuthContext';
import { getSubjects, postSubjects, updateSubjects } from '../../../../../../../services/subjects.service';
import verifyIfDataIsDiferente from '../../../../../../../utils/verifyIfDataIsDiferente';
import { teachers } from './data';
import { toast } from 'sonner';

const Subject = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);
    const [dataCourse, setDataCourse] = useState();
    const [nameSubject, setNameSubject] = useState('');
    const [teacherSubject, setTeacherSubject] = useState();
    const [isDifferent, setIsDifferent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [dataToUpdate, setDataToUpdate] = useState({});

    const isFormValid = props.elementEdit ? isDifferent : (nameSubject && teacherSubject);

    useEffect(()=> {
        const callAPI = async () => {
            if(props.elementEdit){
                try{
                    const response = await getSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, props.academicId, null, props.elementEdit);
                    setDataCourse(response);
                    setNameSubject(response.subjectName.name);
                    setTeacherSubject(response.teacherId);
                } catch(error){
                    props.onClose()
                } finally {
                    setIsLoadingPage(false)
                }
            }
        }
        callAPI()
    }, [props.academicId, props.elementEdit]);

    useEffect(() => {
        if(props.elementEdit){
            const verifyDataToUpdate = verifyIfDataIsDiferente([
                {ancientElement: dataCourse?.subjectName?.name, recentElement: nameSubject, nameField: 'name'}, 
                {ancientElement: dataCourse?.teacherId, recentElement: teacherSubject, nameField: 'teacherId'}
            ], setIsDifferent, false);
            setDataToUpdate(verifyDataToUpdate);
        }
    }, [nameSubject, teacherSubject]);

    const handleAction = async (event) => {
        event.preventDefault();
        try{
            setIsLoading(true)
            let message;
            if(props.elementEdit){
                const response = await updateSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, props.elementEdit, dataToUpdate);
                message = response.message;
            } else {
                const response = await postSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, props.academicId, {name: nameSubject, teacherId: teacherSubject});
                message = response.message;
            }
            toast.success(message);
            props.onClose();
            props.setUpdatePage(true)
        }catch(error){
            toast.warning(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return(
        <>
            {isLoadingPage ? (
                <div>Cargando...</div>
            ) : (
                <form className='grid grid-cols-1 gap-4 pt-6 px-4' onSubmit={handleAction}>
                    <Input isRequired type="text" label="Nombre asignatura" value={nameSubject}  onChange={(e) => setNameSubject(e.target.value)} defaultValue={nameSubject} />
                    <Autocomplete
                        isRequired
                        defaultItems={teachers(props.teachers)}
                        defaultSelectedKey={teacherSubject?.toString()}
                        label="Profesor de asignatura"
                        onSelectionChange={setTeacherSubject}
                    >
                        {(teacher) => <AutocompleteItem key={teacher.value}>{teacher.label}</AutocompleteItem>}
                    </Autocomplete>
                    <Button
                        type="submit"
                        isDisabled={!isFormValid}
                        isLoading={isLoading}
                        color="primary"
                        size="md"
                        className="w-full"
                    >
                        {props.elementEdit ? 'Editar' : 'Crear'}
                    </Button>
                </form>
            )}
        </>
    )
}

export default Subject