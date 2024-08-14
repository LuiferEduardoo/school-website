import { Helmet } from "react-helmet";

const PageErrorServer = () => {
    return (
        <>
            <Helmet>
                <title>Error 500 - Error del servidor</title>
            </Helmet>
            <section className="w-full h-[100dvh] flex items-center justify-center p-4">
                <div className="max-w-md px-4 py-2 space-y-6 text-center">
                    <img
                        src="/assets/img/page-error-500.webp"
                        alt="page-error-500"
                    />
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Upps, ha ocurrido un error en el servidor
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageErrorServer;