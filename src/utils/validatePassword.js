const validatePassword = (password) => {
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.{8,})\S+$/;
    return passwordRegex.test(password);
};

export default validatePassword;