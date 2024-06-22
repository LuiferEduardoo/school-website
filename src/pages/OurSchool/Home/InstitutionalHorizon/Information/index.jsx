import data from "./data";
import Card from "./Card";

const Information = () => {
    return (
        <div className="px-5 lg:py-4 w-full h-[40rem] space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-6 lg:mt-0">Horizonte Institucional</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((d, index) => (
                    <Card 
                        key={index}
                        title={d.title}
                        description={d.description}
                    />
                ))}
            </section>
        </div>
    )
}

export default Information;