import courseService from './../../../../../../../services/course.service';
import subject from './../../../../../../../services/subject.service';

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

const rowsSubject = subject

const optionsFilterSubject = [
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

const rowsCourse = courseService

const optionsFilterCourse = [
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

export { rowsCourse, columnsCourse, optionsFilterCourse, rowsSubject, columnsSubject, optionsFilterSubject};