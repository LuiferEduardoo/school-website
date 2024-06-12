import React, { useState } from 'react';
import Position from './Position';
import RenderForm from './RenderForrn';
import Buttons from './Buttons';


const MultiStep = (props) => {

    const handleNext = () => {
        props.setStep(props.step + 1);
    };
    
    const handlePrev = () => {
        props.setStep(props.step - 1);
    };
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <Position 
                    fields={props.fields}
                    step={props.step}
                />
                <form className='py-6 px-6 rounded-b-lg bg-white' >
                    <RenderForm 
                        fields={props.fields}
                        step={props.step}
                        style={props.style}
                    />
                </form>
            </div>
            <Buttons 
                step={props.step}
                handlePrev={handlePrev}
                fields={props.fields}
                handleNext={handleNext}
                onOpen={props.onOpen}
                edit={props.edit}
                handleAction={props.handleAction}
                isDisabledNext={props.isDisabledNext}
                isDisabledAction={props.isDisabledAction}
                isLoading={props.isLoading}
                hasPreview={props.hasPreview}
            />
        </div>
    )
}

export default MultiStep