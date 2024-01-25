import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'
import Sideber from './components/Sideber'
import Dashboard from './Dashboard';

const AdministrationsPanel = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sideber />
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-scroll">
                    <Header />
                    <div className='mt-20 p-8'>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        {/* <Route path="login" element={<Login />} />
                        <Route path="recovery" element={<Recovery />} />
                        <Route path="change-password" element={<ChangePassword />} /> */}
                    </Routes>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdministrationsPanel;
