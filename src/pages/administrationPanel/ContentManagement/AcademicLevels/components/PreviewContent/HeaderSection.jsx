const HeaderSection = ({nameLevel, levelCode}) => {
    return (
        <header>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{nameLevel}</h1>
            <p className="text-gray-600">Codigo: {levelCode}</p>
        </header>
    )
}

export default HeaderSection