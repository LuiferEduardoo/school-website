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
        key: "status",
        label: "Estado",
    },
    {
        key: "important",
        label: "Fijado",
    },
    {
        key: "createdAt",
        label: "Fecha de publicación"
    },
    {
        key: 'updateAt',
        label: "Fecha de actualización"
    },
    {
        key: "actions",
        label: "Opciones",
    }
]

const rows = (publication) => publication.map(({ id, ImageInstitutionalProjectPublication, publication, visible, important }) => ({
    id,
    title: {
        title: publication.title,
        image: {
            url: ImageInstitutionalProjectPublication[0].image.file.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    status: publication.visible ? 'Visible' : 'Invisible',
    important: publication.important ? 'Fijado' : 'No fijado',
    createdAt: dateConvert(publication.createdAt),
    updateAt: dateConvert(publication.updatedAt)
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