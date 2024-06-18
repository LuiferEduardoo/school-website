const Image = (props) => {
    return (
        <header className="w-full">
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-[15rem] object-cover"
            />
        </header>
    );
};

export default Image