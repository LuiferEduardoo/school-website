import Delete from './Delete'; 

const Classification = (props) => {
    return (
        <>
            <div className='flex flex-wrap gap-4'>
                {props.classifications.map((classification, index) => (
                    <div key={index} className='bg-gray-100 rounded-lg p-2 flex justify-between items-center h-10 gap-2'>
                        <span className=''>
                            {classification.name}
                        </span>
                        <Delete 
                            index={index} 
                            classification={classification} 
                            IdEliminateExistingClassification={props.IdEliminateExistingClassification} 
                            setIdEliminateExistingClassification={props.setIdEliminateExistingClassification} 
                            setClassifications={props.setClassifications} 
                        />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Classification