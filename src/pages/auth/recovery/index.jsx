import { useState } from 'react';
import { Helmet } from "react-helmet";

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí puedes realizar las acciones necesarias al hacer clic en "Iniciar sesión"
    };

    const validarEmail = (email) => {
        // Expresión regular para validar el formato básico del correo electrónico
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleEmail = (value) => {
        setEmail(value)
        setEmailError(validarEmail(value) ? "" : "La dirección e-,ail parece invalida ")
    }

    const isFormValid = email.trim() !== "" && !emailError;

    return (
        <>
            <Helmet>
                <title>¿Haz olvidado tu contraseña?</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full p-6 border rounded-md bg-opacity-50 bg-white">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
                            ¿Te olvidades de tu contraseña?
                        </h2>
                        <p className='text-gray-900 pt-8'>
                            ¡No te preocupes! Escribe tu email asociado a tu cuenta y recibirás instrucciones para poder recuperarlo.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="flex items-center">
                                <label htmlFor="username" className="sr-only">
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={`appearance-none rounded relative block w-full px-3 py-2.5 border ${emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => handleEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        {emailError && (
                                <p className="text-red-500 text-xs italic">{emailError}</p>
                            )}
                        <div>
                            <button
                                type="submit"
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
                                disabled={!isFormValid}
                            >
                                Recuperar contraseña
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-sm">
                                <a href="login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Volver
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
