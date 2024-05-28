import React, { useEffect } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";
import { Skeleton } from "@nextui-org/react";

const CreateOrEdit = (props) => {
    useEffect(() => {
        if (moment(props.start).isAfter(moment(props.end))) {
            props.setError(true);
        } else {
            props.setError(false);
        }
    }, [props.start, props.end]);

    return props.isLoading ? (
        <div className="flex flex-col gap-4 w-full">
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
        </div>
    ) : (
        <>
            <Input
                isRequired
                type="text"
                label="Titulo"
                variant="underlined"
                value={props.title}
                onValueChange={props.setTitle}
            />
            <Textarea
                isRequired
                label="Descripción"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Introduce tu descripción"
                value={props.description}
                onValueChange={props.setDescription}
            />
            <LocalizationProvider
                dateAdapter={AdapterMoment}
                className="flex flex-col"
            >
                <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                >
                    <DateTimePicker
                        label="Inicio *"
                        value={moment(props.start)}
                        onChange={(newValue) => props.setStart(newValue)}
                    />
                    <DateTimePicker
                        label="Finalización *"
                        value={moment(props.end)}
                        onChange={(newValue) => props.setEnd(newValue)}
                    />
                    {props.error && (
                        <p className="text-red-500 text-sm">
                            La fecha de finalización no puede ser posterior a la
                            de inicio
                        </p>
                    )}
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
};

export default CreateOrEdit;
