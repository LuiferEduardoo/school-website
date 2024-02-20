import React, { useState } from 'react';
import Position from './Position';
import RenderForm from './RenderForrn';
import Buttons from './Buttons';


const MultiStep = (props) => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };
    
    const handlePrev = () => {
        setStep(step - 1);
    };
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <Position 
                    fields={props.fields}
                    step={step}
                />
                <form className='py-6 px-6 rounded-b-lg bg-white' >
                    <RenderForm 
                        fields={props.fields}
                        step={step}
                        style={props.style}
                    />
                </form>
            </div>
            <Buttons 
                step={step}
                handlePrev={handlePrev}
                fields={props.fields}
                handleNext={handleNext}
                onOpen={props.onOpen}
                edit={props.edit}
                handleAction={props.handleAction}
                isDisabledNext={props.isDisabledNext}
                isDisabledAction={props.isDisabledAction}
            />
        </div>
    )
}

export default MultiStep