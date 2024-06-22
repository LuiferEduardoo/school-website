import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PageNotFounde = () => {
    return (
        <>
            <Helmet>
                <title>Pagina no encontrada</title>
            </Helmet>
            <section className="w-full h-[100dvh] flex items-center justify-center p-4">
                <div className="max-w-md px-4 py-2 space-y-6 text-center">
                    <img
                        src="../src/assets/img/error-404.webp"
                        alt="page-not-founde"
                    />
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Página no encontrada
                        </h1>
                        <p className="text-gray-500">
                            Lo sentimos, la página que estás buscando no existe
                            o ha sido movida.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center h-10 px-6 font-medium text-gray-50 bg-gray-900 rounded-md shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        Ir a la página de inicio
                    </Link>
                </div>
            </section>
        </>
    );
};

export default PageNotFounde;