import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AdministrationsPanelContext } from '../../../../../providers/AdministrationPanelContext';
import { AuthContext } from '../../../../../providers/AuthContext';
import SkeletonComponent from './Skeleton';
import ProtectedLinks from './ProtectedLinks';
import Links from './Links';
import FinalLinks from './FinalLinks';

const Nav = () => {
    const location = useLocation();
    const { rolUser, superAdmin } = useContext(AdministrationsPanelContext);
    const { isLoading } = useContext(AuthContext);

    const isActive = (path, moreRoutes) => {
        if(moreRoutes && location.pathname.startsWith(`/administration-panel${path}`) ){
            return true;
        }
        return location.pathname === `/administration-panel${path}`;
    };
    return (
        <nav className='text-gray-500 font-semibold'>
            {isLoading ? (
                <SkeletonComponent />
            ) : (
                <ul>
                    <Links isActive={isActive}/>
                    {superAdmin.includes(rolUser) && (
                        <ProtectedLinks isActive={isActive} />
                    )}
                    <FinalLinks isActive={isActive} />
                </ul>
            )}
        </nav>
    )
}

export default Nav