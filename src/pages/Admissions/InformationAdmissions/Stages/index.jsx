import data from "./data"

const Stages = () => {
    return (
        <section className="px-8 py-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Etapas de la solicitud</h1>
            <div className="grid grip-cols-1 lg:grid-cols-7 gap-4">
                {data.map((d, index) => (
                    <div className="flex flex-col items-center gap-3" key={index}>
                        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mb-2 text-gray-500">
                            {d.icon}
                        </div>
                        <span className="text-sm font-medium">{d.title}</span>
                        <div className="bg-gray-200 rounded-md p-5 text-gray-600">
                            <span>
                                {d.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stages