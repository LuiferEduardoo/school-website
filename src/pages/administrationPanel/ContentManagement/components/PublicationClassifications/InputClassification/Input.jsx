import React, { useState } from 'react';

const Input = (props) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            const value = inputValue.trim(); 
            if(value){
                e.preventDefault();
                props.setClassifications([...props.classifications, { name: value}]);
                setInputValue('');
            }
        }
    };
    return (
        <>
            <input 
                ref={props.inputRef}
                type='text'
                className='border-none focus:outline-none bg-transparent h-10'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyPress} 
                maxLength={50}
            />
        </>
    )
}

export default Input