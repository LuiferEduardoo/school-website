import React, { useState } from 'react';
import Graphic from './components/Graphic'
import { Helmet } from "react-helmet";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Graphic />
        </>
    );
};


export default Dashboard