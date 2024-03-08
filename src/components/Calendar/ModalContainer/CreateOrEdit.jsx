import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';

const CreateOrEdit = (props) => {
    useEffect(() => {
        props.setStart(moment(props.select.start).format('YYYY-MM-DDTHH:mm'));
        props.setEnd(moment(props.select.end).format('YYYY-MM-DDTHH:mm'));
    },[props.select.start, props.select.end]);

    useEffect(() => {
        if (moment(props.start).isAfter(moment(props.end))) {
            props.setError(true);
        } else {
            props.setError(false);
        }
    }, [props.start, props.end]);
  return (
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
        <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
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
              La fecha de finalización no puede ser posterior a la de inicio
            </p>
          )}
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default CreateOrEdit;