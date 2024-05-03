import React, { useEffect } from "react";
import { Input, Skeleton } from "@nextui-org/react";
import EditorText from "../../../../../components/EditorText";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

const InformationBasic = (props) => {
    useEffect(() => {
        if (!props.title || !props.content || !props.startedAt)
            props.setIsDisabledNext(true);
        else 
            props.setIsDisabledNext(false);
    }, [props.title, props.content, props.startedAt, props.setIsDisabledNext]);
    return (
        <>
            <Input 
                isLoading={props.isLoading}
                isRequired 
                type="text" 
                label="Titulo" 
                value={props.title} 
                onChange={(e) => props.setTitle(e.target.value)} 
                defaultValue={props.title} 
            />
            <LocalizationProvider
                dateAdapter={AdapterMoment}
            >
                <DemoContainer components={["DateTimePicker"]}>
                    <DatePicker
                        label="Fecha inicio del proyecto"
                        value={moment(props.startedAt)}
                        onChange={(newValue) => props.setStartedAt(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <div>
                <span className="text-gray-500 text-sm m-1">Contenido *</span>
                <EditorText onChangeContent={props.handleContent} content={props.content} /> 
            </div>
        </>
    )
}

export default InformationBasic