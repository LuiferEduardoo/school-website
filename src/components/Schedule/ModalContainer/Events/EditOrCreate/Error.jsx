const Error = (props) => {
    return (
        <>
            {props.error && (
                <p className="text-red-500 text-sm">
                    La hora de finalización no puede ser posterior a la de inicio
                </p>
            )}
        </>
    )
}

export default Error