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
        key: "actions",
        label: "Opciones",
    }
]

const rows = (news) => news.map(({ id, important, publication, imageNews }) => ({
    id,
    title: {
        title: publication.title,
        image: {
            url: imageNews?.[0]?.image?.file?.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    status: publication.visible ? 'Visible' : 'Invisible',
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
    },
    {
        name: 'Visible',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Visible',
                valueKey: true
            }, 
            {
                value: 2,
                label: 'Invisible',
                valueKey: false
            }
        ]
    }
];

export { rows, columns, optionsFilter };