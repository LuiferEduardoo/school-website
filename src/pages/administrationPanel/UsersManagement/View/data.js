const columns = [
    {
        key: "select",
        label: "SELECT",
    },
    {
        key: "name",
        label: "Nombre",
    },
    {
        key: "lastName",
        label: "Apellido",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "role",
        label: "Role",
    },
    {
        key: "status",
        label: "Estado",
    },
    {
        key: "actions",
        label: "Opciones",
    }
]

const rows = (users) => users.map(({ id, name, lastName, username, email, active, rol }) => ({
    id,
    name,
    lastName,
    username,
    email,
    role: rol[0].rol,
    status: active ? 'Activo' : 'Inativo'
}));

const optionsFilter = [
    {
        name: 'Role',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Administrador',
                valueKey : 'administrador'
            }, 
            {
                value: 2,
                label: 'Coordinador',
                valueKey: 'coordinador'
            },
            {
                value: 3,
                label: 'Rector',
                valueKey: 'rector'
            },
            {
                value: 4,
                label: 'Docente',
                valueKey: 'docente'
            },
            {
                value: 5,
                label: 'Orientador',
                valueKey: 'orientador'
            },
            {
                value: 6,
                label: 'Estudiante',
                valueKey: 'estudiante'
            }
        ]
    },
    {
        name: 'Activos',
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