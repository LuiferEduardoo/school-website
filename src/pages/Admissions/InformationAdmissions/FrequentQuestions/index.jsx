import data from "./data";
import Collapsible from "./Collapsible";


const FrequentQuestions = () => {
    return (
        <section className="px-8 py-14 bg-gray-100">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Preguntas frecuentes</h1>
            <p className="mt-5 text-gray-600 dark:text-gray-400 mb-6">
                Encuentra respuestas a las preguntas más comunes sobre este proceso de admisiones.
            </p>
            <div className="flex flex-col gap-3">
                {data.map((d, index) => (
                    <Collapsible 
                        key={index}
                        title={d.question}
                    >
                        {d.answer}
                    </Collapsible>
                ))}
            </div>
        </section>
    )
}

export default FrequentQuestions