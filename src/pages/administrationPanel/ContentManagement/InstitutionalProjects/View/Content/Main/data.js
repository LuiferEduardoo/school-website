const dateConvert = (date) => date ? date.substring(0, 10) : date;

const columns = [
    {
        key: "select",
        label: "SELECT",
    },
    {
        key: "title",
        label: "Titulo",
    },
    {
        key: "startedAt",
        label: "Fecha inicio",
    },
    {
        key: "finisheAT",
        label: "Fecha finalización",
    },
    {
        key: "status",
        label: "Estado",
    },
    {
        key: "important",
        label: "Fijado",
    },
    {
        key: "actions",
        label: "Opciones",
    }
]

const rows = (institutionalProjects) => institutionalProjects.map(({ id, ImageInstitutionalProjects, title, startedAt, finisheAT, visible, important }) => ({
    id,
    title: {
        title,
        image: {
            url: ImageInstitutionalProjects[0].image.file.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    startedAt: dateConvert(startedAt),
    finisheAT: dateConvert(finisheAT),
    status: visible ? 'Visible' : 'Invisible',
    important: important ? 'Fijado' : 'No fijado'
}));

const optionsFilter = [
    {
        name: 'Importante',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Sí',
                valueKey : true
            }, 
            {
                value: 2,
                label: 'No',
                valueKey: false
            }
        ]
    }
];

export { rows, columns, optionsFilter };