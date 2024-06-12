const Information = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-800">
                Estado de solicitud de admisiones
            </h1>
            <p className="text-gray-700 mb-2">
                ¿Ya realizaste tu proceso de admisión? (Si no lo has hecho, da click 
                <a href="/admisiones" className="underline decoration-solid text-blue-600 hover:text-blue-800"> aquí</a>)
            </p>
            <p className="text-gray-700 mb-4">
                Puedes mirar tu estado aquí y descubrir si fuiste admitido:
            </p>
        </div>
    );
}

export default Information;
