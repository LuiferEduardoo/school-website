import moment from "moment";

const counterData = (data, accessor, nameDateReturn, nameField) => {
    const elementCounter = {};
    data.forEach(item => {
        // Usar la función accessor para obtener el valor del contador
        const counter = accessor(item);

        // Incrementar el contador para ese valor
        if (counter !== undefined && counter !== null) {
            if (elementCounter[counter] !== undefined) {
                elementCounter[counter]++;
            } else {
                elementCounter[counter] = 1;
            }
        }
    });
    return Object.keys(elementCounter).map(key => {
        return { [nameDateReturn]: key, [nameField]: elementCounter[key] };
    });
};

const all = (data) => {
    return counterData(data, (item) => moment(item.createdAt).format("MMM DD"), 'date', 'Solicitudes');
};

const grade = (data) => {
    return counterData(data, (item) => item.schoolGrade.grade, 'grade', 'sales');
};

const gender = (data) => {
    return counterData(data, (item) => item.gender, 'name', 'sales');
};

const campus = (data) => {
    return counterData(data, (item) => item.academicLevels.campusId === 1 ? "María Inmaculada" : "María Auxiliadora", 'name', 'sales');
};

const states = (data) => {
    return counterData(data, (item) => item.status, 'name', 'sales');
};

export {
    all,
    grade,
    gender,
    campus,
    states
}