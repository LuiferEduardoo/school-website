const Position = ({fields, step}) => {
    return (
        <>
            <div className='bg-gray-50 rounded'>
                <ul className='flex space-x-2 overflow-x-auto'>
                {fields.map((field, index) => (
                    <li key={index} className={`px-4 py-3 rounded text-sm font-medium ${index + 1 === step ? 'bg-blue-500 text-white' : 'text-gray-500'}`}>
                        {field?.name}
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Position