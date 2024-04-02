import React from 'react';
import { Helmet } from "react-helmet";
import DashboardContent from './DashoardContent';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <DashboardContent/>
        </>
    );
};


export default Dashboard