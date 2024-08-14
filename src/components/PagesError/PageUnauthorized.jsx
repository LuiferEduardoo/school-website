import { Helmet } from "react-helmet";

const PageUnauthorized = () => {
    return (
        <>
            <Helmet>
                <title>Pagina no encontrada</title>
            </Helmet>
            <section className="w-full h-[100dvh] flex items-center justify-center p-4">
                <div className="max-w-md px-4 py-2 space-y-6 text-center">
                    <img
                        src="/assets/img/page-error-401.webp"
                        alt="page-error-401"
                    />
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            No tienes permiso para acceder a este recurso
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageUnauthorized;