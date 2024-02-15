import React, { useState } from 'react';
import {Input} from "@nextui-org/react";

const Course = () => {
    const [grade, setGrade] = useState('');
    const [course, setCourse] = useState('');
    return(
        <>
            <form className='grid grid-cols-1 gap-4 pt-6 px-4'>
                <Input isRequired type="number" label="Grado" value={grade}  onChange={(e) => setGrade(e.target.value)} defaultValue={grade} />
                <Input isRequired type="number" label="Curso" value={course}  onChange={(e) => setCourse(e.target.value)} defaultValue={course} />
            </form>
        </>
    )
}

export default Course