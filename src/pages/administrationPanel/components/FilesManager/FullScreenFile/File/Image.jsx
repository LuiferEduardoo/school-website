const Image = (props) => {
    return (
        <>
            <img src={props.url} alt={props.alt} className="max-h-full max-w-full" />
        </>
    )
}

export default Image