import data from "./data";

const We = () => {
    return (
        <section className="flex flex-col lg:flex-row h-auto lg:h-[20rem] w-full">
            <div className="w-full h-full lg:h-[20rem]">
                <img
                    src="/assets/img/We.webp"
                    className="object-cover w-full h-full"
                    alt="We-photo"
                />
            </div>
            <div className="px-8 lg:px-8 lg:py-4 w-full h-full lg:h-[20rem] space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mt-10">
                    Nosotros
                </h2>
                <p className="text-gray-500">{data.description}</p>
            </div>
        </section>
    );
};

export default We;
