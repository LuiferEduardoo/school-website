export function convertToFormData(data) {
    const formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}