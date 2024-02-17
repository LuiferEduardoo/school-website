import React, { useRef  } from 'react';
import Delete from './Delete';
import Input from './Input';
import Classification from './Classification';

const InputClassification = (props) => {
    const inputRef = useRef(null);
    const handleDivClick = () => {
        // Seleccionar automáticamente el input al hacer clic en el div
        inputRef.current.focus();
    };
    return (
        <>
            <div className='bg-white border-gray-200 border rounded p-4 flex flex-wrap gap-4 h-[20rem] relative overflow-y-auto' onClick={handleDivClick}>
                {
                    props.classifications.length > 0 && (
                        <Delete 
                            classifications={props.classifications} 
                            IdEliminateExistingClassification={props.IdEliminateExistingClassification} 
                            setIdEliminateExistingClassification={props.setIdEliminateExistingClassification} 
                            setClassifications={props.setClassifications}
                            deleteAll={true} 
                            style='absolute top-3 right-2'
                        />
                    )
                }
                <Classification 
                    classifications={props.classifications} 
                    IdEliminateExistingClassification={props.IdEliminateExistingClassification} 
                    setIdEliminateExistingClassification={props.setIdEliminateExistingClassification} 
                    setClassifications={props.setClassifications}  
                />
                <Input 
                    setClassifications={props.setClassifications}
                    classifications={props.classifications}
                    inputRef={inputRef} 
                />
            </div>
        </>
    )
}

export default InputClassification