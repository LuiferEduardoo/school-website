import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sideber from './components/Sideber'
import Header from './components/Header'
import Position from './components/Position';
import Dashboard from './Dashboard';
import ContentManagement from './ContentManagement'
import Calendar from './Calendar';
import Schedule from './Schedule'

const AdministrationsPanel = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sideber />
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-scroll">
                    <Header />
                    <Position />
                    <div className='p-8 h-full'>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="content-management/*" element={<ContentManagement />} />
                            <Route path="calendar" element={<Calendar/>} />
                            <Route path="schedule" element={<Schedule/>} />
                            <Route path="*" element={<Navigate to="" replace />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdministrationsPanel;
