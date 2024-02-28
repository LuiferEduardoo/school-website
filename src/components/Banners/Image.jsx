const Image = ({slides, currentIndex, styleImage}) => {
    return (
        <>
            <div 
                style={{backgroundImage: `url(${slides[currentIndex].url})` }} 
                className={`w-full h-full ${styleImage ? styleImage : ''} bg-center bg-cover duration-500`}
            />
        </>
    )
}

export default Image