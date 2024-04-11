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

const rows = (academicLevels) => academicLevels.map(({ id, nameLevel, visible, imageAcademicLevels }) => ({
    id,
    name: {
        title: nameLevel,
        image: {
            url: imageAcademicLevels[0].image.file.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    status: visible ? 'Visible' : 'Invisible',
}));

const optionsFilter = [
    {
        name: 'Modalidad',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Presencial',
                valueKey : 'Presencial'
            }, 
            {
                value: 2,
                label: 'Virtual',
                valueKey: 'Virtual'
            }
        ]
    },
    {
        name: 'Jornada',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Mañana',
                valueKey: 'Mañana'
            }, 
            {
                value: 2,
                label: 'Tarde',
                valueKey: 'Tarde'
            },
            {
                value: 3,
                label: 'Noche',
                valueKey: 'Noche'
            },
            {
                value: 4,
                label: 'Flexible',
                valueKey: 'Flexible'
            }
        ]
    },
    {
        name: 'Sede',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'María Inmaculada',
                valueKey: 1
            }, 
            {
                value: 2,
                label: 'María Auxiliadora',
                valueKey: 2
            }
        ]
    }
    
];

export { rows, columns, optionsFilter };