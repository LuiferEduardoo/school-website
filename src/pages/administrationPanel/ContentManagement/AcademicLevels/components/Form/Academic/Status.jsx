import React, { useEffect } from "react";
import { Status } from "../../../../../components/Form";

const StatusComponent = (props) => {
    useEffect(() => {
        if(!props.isDifferent){
            props.setIsDisabledAction(true)
        } else {
            props.setIsDisabledAction(false)
        }
    }, [props.isDifferent]);

    return (
        <div className='flex flex-col gap-4'>
            <Status
                elementName='Visibilidad:'
                status={props.status}
                setStatus={props.setStatus}
                nameStatusTrue='Visible'
                nameStatusFalse='Invisible'
            />
        </div>
    )
}

export default StatusComponent