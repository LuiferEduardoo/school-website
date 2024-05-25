const columns = [
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
        label: "Docente",
    },
    {
        key: "actions",
        label: "Opciones",
    }
];

const rows = (subjects) => subjects.map(({ id, subjectName, teacher }) => ({
    id,
    name: subjectName.name,
    teacher: `${teacher.name?.charAt(0)?.toUpperCase() + teacher.name?.slice(1)} ${teacher.lastName?.charAt(0)?.toUpperCase() + teacher.lastName?.slice(1)}`,
}));;

const optionsFilter = (teachers) => [
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

export { rows, columns, optionsFilter };