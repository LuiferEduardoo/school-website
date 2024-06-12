import React, { useContext, useEffect } from "react";
import { FormContext } from ".";
import {Input, Autocomplete, AutocompleteItem} from "@nextui-org/react";
import moment from "moment";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { genero, documentTypeDataDefault } from "../../../pages/administrationPanel/AdmissionRequest/components/Form/data";

const PersonalInformation = () => {
    const {firstName, setFirstName, secondName, setSecondName, surname, setSurname, secondSurname, setSecondSurname, documentType, setDocumentType, numberDocument, setNumberDocument, gender, setGender, birthdate, setBirthdate, setIsDisabledNext } =
        useContext(FormContext);

        useEffect(() => {
            if (!firstName || !surname || !secondSurname || !documentType || !gender || !birthdate)
                setIsDisabledNext(true);
            else 
                setIsDisabledNext(false);
        }, [firstName, surname, secondSurname, documentType, numberDocument, gender, birthdate]);

    return (
        <section className="grid grid-cols-2 gap-6">
            <Input 
                isRequired
                variant="bordered"
                type="text"
                label="Primer nombre"
                value={firstName}
                onValueChange={setFirstName}
            />
            <Input 
                variant="bordered"
                type="text"
                label="Segundo nombre"
                value={secondName}
                onValueChange={setSecondName}
            />
            <Input 
                variant="bordered"
                isRequired
                type="text"
                label="Primer apellido"
                value={surname}
                onValueChange={setSurname}
            />
            <Input 
                isRequired
                variant="bordered"
                type="text"
                label="Segundo apellido"
                value={secondSurname}
                onValueChange={setSecondSurname}
            />
            <Autocomplete
                variant="bordered"
                isRequired
                label="Tipo de documento"
                defaultItems={documentTypeDataDefault}
                selectedKey={documentType}
                onSelectionChange={setDocumentType}
            >
                {(item) => <AutocompleteItem key={item.label}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <Input 
                variant="bordered"
                isRequired
                type="number"
                label="Numero de documento"
                value={numberDocument}
                onValueChange={setNumberDocument}
            />
            <Autocomplete
                variant="bordered"
                isRequired
                label="Genero"
                defaultItems={genero}
                selectedKey={gender}
                onSelectionChange={setGender}
            >
                {(item) => <AutocompleteItem key={item.label}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Fecha de nacimiento *"
                        value={moment(birthdate)}
                        onChange={(newValue) => setBirthdate(newValue)}
                        maxDate={moment()}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </section>
    )
}

export default PersonalInformation