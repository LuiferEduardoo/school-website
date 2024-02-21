const Publications = (props) => {
    return(
        <>
            <article className="max-w-4xl mx-auto p-4">
                <div>
                    <h1 className="text-3xl font-bold mb-4">{props?.title}</h1>
                    <div className="mb-4">
                        <img
                            src={props?.imageUrl}
                            alt="Imagen del post"
                            className="object-cover rounded"
                        />
                    </div>
                </div>
                <div className="mt-2 prose max-w-none" dangerouslySetInnerHTML={{__html: props?.content}} />
            </article>
        </>
    )
}

export default Publications