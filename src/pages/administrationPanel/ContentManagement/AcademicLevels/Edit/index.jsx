import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../../../providers/AuthContext";
import { Skeleton } from "@nextui-org/react";
import {Academic} from "./../components/Form";
import { Helmet } from "react-helmet";
import { getAcademicLevels } from "../../../../../services/academicLevels.service";

const Edit = () => {
    const { academicId } = useParams();
    const [academicLevel, setAcademicLevel] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(AuthContext);
    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        const callAPI = async () => {
            try{
                setIsLoading(true)
                const response = await getAcademicLevels(accessToken, refreshToken, setAccessToken, setRefreshToken, {}, academicId)
                setAcademicLevel(response);
            } catch(error){
                navigate("..");
            }finally{
                setIsLoading(false);
                setUpdatePage(false)
            }
        }
        callAPI();
    },[academicId, updatePage]);

    return (
        <>
            <Helmet>
                <title>Editar nivel academico</title>
            </Helmet>
            {isLoading ? (
                <Skeleton className="w-full h-full" />
            ) : (
                <Academic 
                    edit={true}
                    setUpdatePage={setUpdatePage}
                    id={academicLevel.id}
                    nameLevel={academicLevel.nameLevel}
                    description={academicLevel.description}
                    levelCode={academicLevel.levelCode}
                    educationalObjectives={academicLevel.educationalObjectives}
                    admissionRequirements={academicLevel.admissionRequirements}
                    campusNumber={academicLevel.campus.campusNumber}
                    educationDay={academicLevel.educationDay.educationDay}
                    modality={academicLevel.modality.modality}
                    visible={academicLevel.visible}
                    image={academicLevel.imageAcademicLevels[0].image.file}
                />         
            )}
        </>
    )
}

export default Edit