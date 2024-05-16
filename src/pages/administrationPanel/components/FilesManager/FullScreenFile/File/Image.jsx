const Image = (props) => {
    return (
        <>
            <img src={props.blob} alt={props.alt} className="max-h-full max-w-full" />
        </>
    )
}

export default Image