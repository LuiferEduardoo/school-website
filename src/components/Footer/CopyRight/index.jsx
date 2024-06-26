const CopyRight = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="h-10 flex flex-col justify-around items-center text-sm text-gray-700 lg:flex-row bg-gray-200">
            <p>
                &copy; {currentYear} Institución Educativa María Inamaculada - Todos los
                derechos reservados
            </p>
            <div className="flex gap-2">
                <p>Desarrollado por:</p> 
                <a href="https://luifereduardoo.com" target="_blank">
                    Luifer Ortega
                </a>
            </div>
        </section>
    );
};

export default CopyRight
