import subjectsService from "../../../../services/subjects.service";

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

const rows = subjectsService.map(({ id, name, teacher }) => ({
    id,
    name,
    teacher: `${teacher.name} ${teacher.lasTname}`
}));

const optionsFilter = [
    {
        value: 1,
        label: 'Opción 1'
    },
    {
        value: 2,
        label: 'Opción 2'
    },
    {
        value: 3,
        label: 'Opción 3'
    }
];

export { rows, columns, optionsFilter };