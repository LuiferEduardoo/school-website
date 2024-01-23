import { useState, useEffect } from 'react';
import { useNavigate , useLocation  } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ChangePassword =() => {
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [repeatPasswordError, setRepeatPasswordError] = useState("");

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/auth/login'); // Utiliza la función navigate aquí
        }
    }, [token, navigate]);

    const handleChangePassword = (event) => {
        event.preventDefault();
    }
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.{8,})\S+$/;
        return passwordRegex.test(password);
    };

    const handleNewPasswordChange = (value) => {
        setNewPassword(value);
        setNewPasswordError(validatePassword(value) ? "" : "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
        setRepeatPasswordError(repeatPassword === value ? "" : "Las contraseñas no coinciden.");         // Realiza la validación de repetición de contraseña aquí
    };

    const handleRepeatPasswordChange = (value) => {
        setRepeatPassword(value);
        setRepeatPasswordError(newPassword === value ? "" : "Las contraseñas no coinciden.");
    };

    const isFormValid = newPassword.trim() !== '' && repeatPassword.trim() !== '' && newPassword === repeatPassword && !newPasswordError && !repeatPasswordError;

    return (
        <>
            <Helmet>
                <title>Cambiar contraseña</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full p-6 border rounded-md bg-opacity-50 bg-white">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Cambiar contraseña
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleChangePassword}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="flex items-center">
                                <label htmlFor="newPassword" className="sr-only">
                                    Nueva contraseña
                                </label>
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    required
                                    className={`appearance-none rounded relative block w-full px-3 py-2.5 border ${newPasswordError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Nueva contraseña"
                                    value={newPassword}
                                    onChange={(e) => handleNewPasswordChange(e.target.value)}
                                />
                            </div>
                            {newPasswordError && (
                                <p className="text-red-500 text-xs italic">{newPasswordError}</p>
                            )}
                            <div className="flex items-center">
                                <label htmlFor="repeatPassword" className="sr-only">
                                    Repite la contraseña
                                </label>
                                <input
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    type="password"
                                    required
                                    className={`appearance-none rounded relative block w-full px-3 py-2.5 border ${repeatPasswordError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4`}
                                    placeholder="Repite la contraseña"
                                    value={repeatPassword}
                                    onChange={(e) => handleRepeatPasswordChange(e.target.value)}
                                />
                            </div>
                            {repeatPasswordError && (
                                <p className="text-red-500 text-xs italic mt-2">{repeatPasswordError}</p>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
                                disabled={!isFormValid}
                            >
                                Cambiar contraseña
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;