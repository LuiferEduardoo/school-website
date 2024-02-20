const RenderForm = ({fields, step, style}) => {
    const stepFields = fields.filter((_, index) => index + 1 === step);
    return (
        <>
            {stepFields.map((field, index) => (
                <div key={index} className={`${style}`}>
                    {field.component}
                </div>
            ))}
        </>
    )
}

export default RenderForm