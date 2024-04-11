import React, { useEffect, useState, useContext } from 'react';
import { Input, Button } from "@nextui-org/react";
import { AuthContext } from '../../../../../../../providers/AuthContext';
import { getCourses, postCourse, updateCourse } from '../../../../../../../services/course.service';
import verifyIfDataIsDiferente from '../../../../../../../utils/verifyIfDataIsDiferente';
import { toast } from 'sonner';

const Course = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext);
    const [dataCourse, setDataCourse] = useState()
    const [grade, setGrade] = useState('');
    const [course, setCourse] = useState('');
    const [isDifferent, setIsDifferent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState({})

    const isFormValid = props.elementEdit ? isDifferent : (grade && course);

    useEffect(()=> {
        const callAPI = async () => {
            if(props.elementEdit){
                try{
                    const response = await getCourses(accessToken, setAccessToken, refreshToken, setRefreshToken, props.academicId, null, props.elementEdit);
                    setDataCourse(response);
                    setGrade(response.schoolGrade.grade);
                    setCourse(response.course);
                } catch(error){
                    props.onClose()
                }
            }
        }
        callAPI()
    }, [props.academicId, props.elementEdit]);

    useEffect(() => {
        if(props.elementEdit){
            const verifyDataToUpdate = verifyIfDataIsDiferente([
                {ancientElement: dataCourse?.course, recentElement: course, nameField: 'course'}, 
                {ancientElement: dataCourse?.schoolGrade.grade, recentElement: grade, nameField: 'grade'}
            ], setIsDifferent);
            setDataToUpdate(verifyDataToUpdate);
        }
    }, [course, grade]);

    const handleAction = async (event) => {
        event.preventDefault();
        try{
            setIsLoading(true)
            let message;
            if(props.elementEdit){
                const response = await updateCourse(accessToken, setAccessToken, refreshToken, setRefreshToken, props.elementEdit, dataToUpdate);
                message = response.message;
            } else {
                const response = await postCourse(accessToken, setAccessToken, refreshToken, setRefreshToken, props.academicId, {course: course, grade: grade});
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
            <form className='grid grid-cols-1 gap-4 pt-6 px-4' onSubmit={handleAction}>
                <Input isRequired type="number" label="Grado" value={grade}  onValueChange={setGrade} />
                <Input isRequired type="number" label="Curso" value={course}  onValueChange={setCourse} />
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
        </>
    )
}

export default Course