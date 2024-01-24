import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'
import Sideber from './components/Sideber'

const AdministrationsPanel = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sideber />
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-scroll">
                    <Header />
                </main>
            </div>
        </>
    );
};

export default AdministrationsPanel;
