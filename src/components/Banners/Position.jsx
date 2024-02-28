import { RxDotFilled } from 'react-icons/rx';

const Position = ({slides, setCurrentIndex, currentIndex}) => {

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <>
            <div className='absolute bottom-0 left-0 right-0 flex justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                >
                    <RxDotFilled className={currentIndex === slideIndex ? 'text-white' : 'text-slate-800'}/>
                </div>
                ))}
            </div>
        </>
    )
}

export default Position