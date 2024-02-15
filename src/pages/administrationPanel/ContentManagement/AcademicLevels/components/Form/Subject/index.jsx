import React, { useState } from 'react';
import { Input, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { teachers } from './data'

const Subject = () => {
    const [nameSubject, setNameSubject] = useState('');
    const [teacherSubject, setTeacherSubject] = useState(new Set([]));
    return(
        <>
            <form className='grid grid-cols-1 gap-4 pt-6 px-4'>
                <Input isRequired type="text" label="Nombre asignatura" value={nameSubject}  onChange={(e) => setNameSubject(e.target.value)} defaultValue={nameSubject} />
                <Autocomplete
                    isRequired
                    defaultItems={teachers}
                    label="Profesor de asignatura"
                    onSelectionChange={setTeacherSubject}
                >
                    {(teacher) => <AutocompleteItem key={teacher.value}>{teacher.label}</AutocompleteItem>}
                </Autocomplete>
            </form>
        </>
    )
}

export default Subject