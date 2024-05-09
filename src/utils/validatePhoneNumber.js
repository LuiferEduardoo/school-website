const validatePhoneNumber = (number) => {
    // Expresión regular para validar el número telefónico colombiano
    const regex = /^[0-9]{10}$/;

    return regex.test(number)
}

export default validatePhoneNumber