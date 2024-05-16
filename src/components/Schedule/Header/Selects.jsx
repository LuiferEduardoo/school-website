import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
const academicLevelsService = []

const grades = (academicId) =>{
  return academicLevelsService.filter((academic) => academic.id === academicId)?.[0]?.schoolGrade
}
const courses = [1, 2, 3];


const Selects = (props) => {
  return (
    <section className='flex gap-2 lg:w-[60%] sm:w-full'>
      <Select
        label="Nivel academico"
        className="max-w-xs"
        variant="bordered"
        selectedKey={props.academicLevel}
        onSelectionChange={props.setAcademicLevel}
      >
        {academicLevelsService.map((academicLevel) => (
          <SelectItem key={academicLevel.id} textValue={academicLevel.nameLevel}>
            {academicLevel.nameLevel}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Grado"
        className="max-w-xs"
        variant="bordered"
        selectedKey={props.grade}
        onSelectionChange={props.setGrade}
        isDisabled={!props.academicLevel}
      >
        {grades(1)?.map((grade) => (
          <SelectItem key={grade.id} textValue={grade.grade}>
            {grade.grade}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Curso"
        className="max-w-xs"
        variant="bordered"
        selectedKey={props.course}
        onSelectionChange={props.setCourse}
        isDisabled={!props.academicLevel || !props.grade}
      >
        {courses.map((course) => (
          <SelectItem key={course} textValue={course}>
            {course}
          </SelectItem>
        ))}
      </Select>
    </section>
  );
};

export default Selects;