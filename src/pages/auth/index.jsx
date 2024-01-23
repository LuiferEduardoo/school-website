import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Recovery from './recovery';
import ChangePassword from './changePassword';

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="login" replace />} />
                <Route path="login" element={<Login />} />
                <Route path="recovery" element={<Recovery />} />
                <Route path="change-password" element={<ChangePassword />} />
            </Routes>
        </>
    );
};

export default Auth;
