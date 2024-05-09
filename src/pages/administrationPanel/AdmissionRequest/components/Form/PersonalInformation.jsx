import {Input, Autocomplete, AutocompleteItem} from "@nextui-org/react";
import moment from "moment";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { genero, documentTypeDataDefault } from "./data.js";

const PersonalInformation = (props) => {
    return (
        <>
            <Input 
                isLoading={props.isLoadingPage}
                isRequired
                type="text"
                label="Primer nombre"
                value={props.firstName}
                onValueChange={props.setFirstName}
            />
            <Input 
                isLoading={props.isLoadingPage}
                type="text"
                label="Segundo nombre"
                value={props.secondName}
                onValueChange={props.setSecondName}
            />
            <Input 
                isLoading={props.isLoadingPage}
                isRequired
                type="text"
                label="Primer apellido"
                value={props.surname}
                onValueChange={props.setSurname}
            />
            <Input 
                isLoading={props.isLoadingPage}
                type="text"
                label="Segundo apellido"
                value={props.secondSurname}
                onValueChange={props.setSecondSurname}
            />
            <Autocomplete
                isLoading={props.isLoadingPage}
                isRequired
                label="Tipo de documento"
                defaultItems={documentTypeDataDefault}
                selectedKey={props.documentType}
                onSelectionChange={props.setDocumentType}
            >
                {(item) => <AutocompleteItem key={item.label}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <Input 
                isLoading={props.isLoadingPage}
                isRequired
                type="number"
                label="Numero de documento"
                value={props.numberDocument}
                onValueChange={props.setNumberDocument}
            />
            <Autocomplete
                isLoading={props.isLoadingPage}
                isRequired
                label="Genero"
                defaultItems={genero}
                selectedKey={props.gender}
                onSelectionChange={props.setGender}
            >
                {(item) => <AutocompleteItem key={item.label}>{item.label}</AutocompleteItem>}
            </Autocomplete>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Fecha de nacimiento *"
                        value={moment(props.birthdate)}
                        onChange={(newValue) => props.setBirthdate(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}

export default PersonalInformation