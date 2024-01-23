import { useState } from 'react';
import { Helmet } from "react-helmet";

const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí puedes realizar las acciones necesarias al hacer clic en "Iniciar sesión"
    };

    const isFormValid = username.trim() !== "" && password.trim() !== "";

    return (
        <>
            <Helmet>
                <title>Iniciar sesión</title>
            </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-6 border rounded-md bg-opacity-50 bg-white">
                <div>
                    <img className="mx-auto h-40 w-auto" src='../src/assets/logo-colegio.png' alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Iniciar sesión en tu cuenta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="flex items-center">
                            <label htmlFor="username" className="sr-only">
                                Correo electrónico
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="email"
                                required
                                className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Correo electrónico"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
            
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="recovery" className="font-medium text-indigo-600 hover:text-indigo-500">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={!isFormValid}
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;
