import data from "./data"

const WhyChooseUs = () => {
    return (
        <section className="flex flex-col lg:flex-row bg-gray-200 h-auto w-full">
            <div className="p-10 w-full h-auto lg:w-[50%]">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">¿Por qué elegirnos?</h1>
                <span className="text-gray-600 text-lg">
                    {data.whyChooseUs}
                </span>
            </div>
            <div className="w-full lg:w-[50%] h-auto">
                <img src="../src/assets/img/why-choose-us.webp" className="bg-cover" alt="why-choose-us"/>
            </div>
        </section>
    )
}

export default WhyChooseUs