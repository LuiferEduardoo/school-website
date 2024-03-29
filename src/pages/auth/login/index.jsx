import { Helmet } from "react-helmet";
import Form from "./Form";

const Login = () =>{

    return (
        <>
            <Helmet>
                <title>Iniciar sesión</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full p-6 border rounded-md bg-opacity-50 bg-white">
                    <div>
                        <img className="mx-auto h-40 w-auto" src='../src/assets/escudo-colegio.webp' alt="Workflow" />
                        <h2 className="text-center text-2xl font-bold text-gray-900">
                            Iniciar sesión
                        </h2>
                    </div>
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Login;