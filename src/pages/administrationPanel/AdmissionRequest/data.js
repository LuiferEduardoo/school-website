import dateConvert from "../../../utils/dateConvert";
import calculateAge from "../../../utils/calculateAge";

const columns = [
    {
        key: "select",
        label: "SELECT",
    },
    {
        key: "academicLevel",
        label: "Nivel academico",
    },
    {
        key: "campus",
        label: 'sede'
    },
    {
        key: "grade",
        label: "Grado",
    },
    {
        key: "firstName",
        label: "Primer nombre",
    },
    {
        key: "secondName",
        label: "Segundo nombre",
    },
    {
        key: "surname",
        label: "Primer Apellido",
    },
    {
        key: "secondSurname",
        label: "Segundo Apellido",
    },
    {
        key: "birthdate",
        label: "Fecha de cumpleaños",
    },
    {
        key: "age",
        label: "Edad",
    },
    {
        key: "gender",
        label: "Genero",
    },
    {
        key: "documentType",
        label: "Tipo de documento",
    },
    {
        key: "numberDocument",
        label: "Numero de documento",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "phoneNumber",
        label: "Numero de telefono",
    },
    {
        key: "createdAt",
        label: "Fecha de creación",
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

const rows = (admissionRequest) => admissionRequest.map(({ id, academicLevels, schoolGrade, firstName, secondName, surname, secondSurname, birthdate, gender, documentType, numberDocument, phoneNumber, email, createdAt, status }) => ({
    id,
    grade: schoolGrade.grade,
    academicLevel: academicLevels.nameLevel,
    campus: academicLevels.campusId === 1 ? 'María Inamaculada' : 'María Auxiliadora',
    firstName,
    secondName,
    surname,
    secondSurname,
    birthdate: dateConvert(birthdate),
    age: calculateAge(birthdate),
    gender,
    documentType,
    numberDocument,
    email,
    phoneNumber,
    createdAt: dateConvert(createdAt),
    status: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
}));

const optionsFilter = [
    {
        name: 'Genero',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'Femenino',
                valueKey : 'Femenino'
            }, 
            {
                value: 2,
                label: 'Masculino',
                valueKey: 'Masculino'
            },
            {
                value: 3,
                label: 'Preferible no decir',
                valueKey: 'Preferible no decir'
            }
        ]
    },
    {
        name: 'Estado',
        selectionMode: 'single',
        options : [
            {
                value: 1,
                label: 'En revisión',
                valueKey : 'En revisión'
            }, 
            {
                value: 2,
                label: 'Admitido',
                valueKey: 'Admitido'
            },
            {
                value: 3,
                label: 'Admitido',
                valueKey: 'No admitido'
            }
        ]
    }
];

export { rows, columns, optionsFilter };