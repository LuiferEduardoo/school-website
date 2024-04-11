const columnsSubject = [
    {
        key: "select",
        label: "SELECT",
    },
    {
        key: "name",
        label: "NOMBRE",
    },
    {
        key: "teacher",
        label: "PROFESOR",
    },
    {
        key: "actions",
        label: "Opciones",
    }
];

const rowsSubject = (subjects) => subjects.map(({ id, subjectName, teacher }) => ({
    id,
    name: subjectName.name,
    teacher: `${teacher.name?.charAt(0)?.toUpperCase() + teacher.name?.slice(1)} ${teacher.lastName?.charAt(0)?.toUpperCase() + teacher.lastName?.slice(1)}`,
}));;

const optionsFilterSubject = (teachers) => [
    {
        name: 'Profesor',
        selectionMode: 'single',
        options: teachers.map((teacher) => ({
            value: teacher.id,
            label: `${teacher.name?.charAt(0)?.toUpperCase() + teacher.name?.slice(1)} ${teacher.lastName?.charAt(0)?.toUpperCase() + teacher.lastName?.slice(1)}`,
            valueKey: teacher.id,
        }))
    }
];

const columnsCourse = [
    {
        key: "select",
        label: "SELECT",
    },
    {
        key: "grade",
        label: "GRADO",
    },
    {
        key: "course",
        label: "CURSO",
    },
    {
        key: "actions",
        label: "Opciones",
    }
];

const rowsCourse = (courses) => courses.map(({id, course, schoolGrade}) => ({
    id,
    course,
    grade: schoolGrade.grade
}));

const optionsFilterCourse = [];

export { rowsCourse, columnsCourse, optionsFilterCourse, rowsSubject, columnsSubject, optionsFilterSubject};