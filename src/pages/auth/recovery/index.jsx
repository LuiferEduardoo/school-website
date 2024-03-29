import React from 'react';
import { Helmet } from "react-helmet";
import Form from './Form';

const Recovery = () => {
    return (
        <>
            <Helmet>
                <title>¿Haz olvidado tu contraseña?</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full p-6 border rounded-md bg-opacity-50 bg-white">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
                            ¿Te olvidaste de tu contraseña?
                        </h2>
                        <p className='text-gray-900 pt-8'>
                            ¡No te preocupes! Escribe tu email asociado a tu cuenta y recibirás instrucciones para poder recuperarlo.
                        </p>
                    </div>
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Recovery;