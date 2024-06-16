const Content = (props) => {
    return (
        <article className='cursor-pointer w-full bg-white rounded-md h-[20rem] overflow-hidden'>
            <a href={`/niveles-academicos/${props.id}`} className="block w-full h-full relative group">
                <img src={props.image} alt={props.nameImage} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 p-3 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 group-hover:bg-opacity-70">
                    <h2 className="text-white text-3xl  text-center font-bold">{props.name}</h2>
                </div>
            </a>
        </article>
    )
}

export default Content