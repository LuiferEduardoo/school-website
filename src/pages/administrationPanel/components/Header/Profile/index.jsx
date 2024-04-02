import React, { useState , useContext} from 'react';
import { AuthContext } from '../../../../../providers/AuthContext';
import { AdministrationsPanelContext } from '../../../../../providers/AdministrationPanelContext';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import {
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutBoxLine 
} from "react-icons/ri";
import { Skeleton } from "@nextui-org/react";
import { logout } from '../../../../../services/auth.service';

const Profile = () => {
    const { isLoading, accessToken, setRefreshToken } = useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);

    const renderProfileName = () => {
        if (isLoading) {
            return <Skeleton className="h-3 w-4/5 rounded-lg"/>;
        } else {
            return userInformation.name?.charAt(0)?.toUpperCase() + userInformation.name?.slice(1);
        }
    };

    const logoutSession = async () => {
        await logout(accessToken, setRefreshToken);
        window.location.href = "/auth/login";
    };

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <button>
                        <div className='flex items-center gap-2 p-3'>
                            {renderProfileName()} <RiArrowDownSLine />
                        </div>
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="setting">
                        <Link to="account-setting" className='flex items-center gap-2 p-3'>
                            <RiSettings3Line /> Configuración
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="logout" className="text-danger" color="danger">
                        <div className="flex items-center gap-2 p-3" onClick={logoutSession}>
                            <RiLogoutBoxLine /> Cerrar sesión
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default Profile;