import newsService from "../../../../../services/news.service";

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

const rows = newsService.map(({ id, important, publication, imageNews }) => ({
    id,
    title: {
        title: publication.title,
        image: {
            url: imageNews.image.file.url,
            styleContainer: "h-20 w-30",
            styleImage: "rounded",
        },
    },
    status: publication.visible ? 'Visible' : 'Invisible',
    important: important ? 'Fijado' : 'No fijado'
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