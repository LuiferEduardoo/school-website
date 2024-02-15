import React, {useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import View from './View';
import Create from './Create';
import Edit from './Edit';

const AcademicLevels = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<View />} />
                <Route path="create" element={<Create/>} />
                <Route path="edit/:academicId" element={<Edit/>} />
            </Routes>
        </>
    )
}

export default AcademicLevels 