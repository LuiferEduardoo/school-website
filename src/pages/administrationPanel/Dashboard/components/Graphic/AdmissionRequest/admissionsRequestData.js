const counterData = (data, elementForCounter, nameDateReturn) => {
    const elementCounter = {}
    data.forEach(item => {
        // Obtener solo el día de la fecha (YYYY-MM-DD)
        const counter = item[elementForCounter];
        
        // Incrementar el contador para ese día
        if (elementCounter[counter]) {
            elementCounter[counter]++;
        } else {
            elementCounter[counter] = 1;
        }
    });
    return Object.keys(elementCounter).map(key => {
        return { [nameDateReturn]: key, sales: elementCounter[key] };
    });
}

const all = (data) => {
    return counterData(data, "createAt.split('T')[0]", 'date');
}

const grade = (data) => {
    return counterData(data, "grade.grade", 'date');
}

const gender =(data) => {
    return counterData(data, "gender", 'name');
}

const campus =(data) => {
    return counterData(data, "academicLevels.campus.campusNumber", 'name');
}

const states = (data) => {
    return counterData(data, "status", 'name');
}

export {
    all,
    grade,
    gender,
    campus,
    states
}