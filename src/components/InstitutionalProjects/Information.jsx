const Information = (props) => {
    return (
        <section className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <img
                    alt={`${
                        props.nameImage ? props.nameImage : "Project Image"
                    }`}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    height="310"
                    src={props?.image}
                    width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {props?.title}
                        </h2>
                        <div
                            className="max-w-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 prose"
                            dangerouslySetInnerHTML={{ __html: props?.content }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Information
