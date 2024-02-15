import academicLevelsService from './../../../../../../../services/academicLevels.service';

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
        key: "status",
        label: "Estado",
    },
    {
        key: "actions",
        label: "Opciones",
    }
];

const rows = academicLevelsService.map(({ id, nameLevel, visible, imageAcademicLevels }) => ({
    id,
    name: {
        title: nameLevel,
        image: {
            url: imageAcademicLevels.image.file.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    status: visible ? 'Visible' : 'Invisible',
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