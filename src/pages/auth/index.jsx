import React from 'react';
import { AuthProvider } from '../../providers/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Recovery from './recovery';
import ChangePassword from './changePassword';

const Auth = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Navigate to="login" replace />} />
                <Route path="login" element={<Login />} />
                <Route path="recovery" element={<Recovery />} />
                <Route path="change-password" element={<ChangePassword />} />
            </Routes>
        </AuthProvider>
    );
};

export default Auth;
