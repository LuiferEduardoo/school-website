const validarEmail = (email) => {
    // Expresión regular para validar el formato básico del correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export default validarEmail