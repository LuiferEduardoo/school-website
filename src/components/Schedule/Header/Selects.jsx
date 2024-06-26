import { useEffect, useState, useContext } from "react";
import { ScheduleContext } from "..";
import { AuthContext } from "../../../providers/AuthContext";
import { getAcademicLevels } from "../../../services/academicLevels.service";
import { getCourses } from "../../../services/course.service";
import { Select, SelectItem } from "@nextui-org/react";

const Selects = () => {
  const authContext = useContext(AuthContext);
  const {
    accessToken = null,
    setAccessToken = null,
    refreshToken = null,
    setRefreshToken = null
  } = authContext || {};
  const {academicLevel, setAcademicLevel, course, setCourse, withoutToken} = useContext(ScheduleContext);
  const [isLoadingAcademic, setIsLoadingAcademic] = useState(true);
  const [isLoadingCourse, setIsLoadingCourse] = useState(false);

  const [dateAcademicLevel, setDateAcademicLevel] = useState([]);
  const [dateCourse, setDateCouse] = useState([]);

    useEffect(() => {
      const callAPI = async () => {
        try{
          setIsLoadingAcademic(true);
            const {elements} = await getAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken, {}, null, withoutToken)
            setDateAcademicLevel(elements);
          } finally {
            setIsLoadingAcademic(false)
          }
      }
      callAPI()
    }, []);

    useEffect(() => {
      const callAPI = async () => {
        const idAcademicLevel = [...academicLevel]
        if(idAcademicLevel[0]){
          try{
            setIsLoadingCourse(true);
              const {elements} = await getCourses(accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademicLevel[0], {}, null, withoutToken)
              setDateCouse(elements);
            } finally {
              setIsLoadingCourse(false);
            }
        } else {
          setDateCouse([])
        }
      }
      callAPI();
    }, [academicLevel])

    const onSelectionAcademicLevels = (id) => {
      setAcademicLevel(id);
      setCourse(new Set());
  }

  return (
    <section className='flex gap-2 lg:w-[60%] sm:w-full'>
      <Select
        isLoading={isLoadingAcademic}
        label="Nivel academico"
        className="max-w-xs"
        variant="bordered"
        selectedKey={academicLevel}
        onSelectionChange={onSelectionAcademicLevels}
      >
        {dateAcademicLevel.map((academicLevel) => (
          <SelectItem key={academicLevel.id} textValue={academicLevel.nameLevel}>
            {academicLevel.nameLevel}
          </SelectItem>
        ))}
      </Select>
      <Select
        isLoading={isLoadingCourse}
        label="Grado y curso"
        className="max-w-xs"
        variant="bordered"
        selectedKey={course}
        onSelectionChange={setCourse}
        isDisabled={!academicLevel}
      >
        {dateCourse.map((course) => (
          <SelectItem key={course.id} textValue={`${course.schoolGrade.grade}:${course.course}`}>
            {`${course.schoolGrade.grade}:${course.course}`}
          </SelectItem>
        ))}
      </Select>
    </section>
  );
};

export default Selects;