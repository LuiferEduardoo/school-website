const queryParameters = (params, filters) => {
    for (const key in filters) {
        if (filters[key] !== undefined) {
            params[key] = filters[key];
        } else {
            delete params[key];
        }
    }
}

export default queryParameters