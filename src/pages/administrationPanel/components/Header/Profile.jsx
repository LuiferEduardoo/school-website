import React, { useState , useContext} from 'react';
import { AuthContext } from "../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";
import { Link } from 'react-router-dom';
import {
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutBoxLine 

} from "react-icons/ri";
import {Skeleton} from "@nextui-org/react";
import { logout } from '../../../../services/auth.service';

const Profile = () => {
    const { isLoading, accessToken, setRefreshToken } = useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);
    const [optionProfile, setOptionProfile] = useState(false);
    const handleProfileClick = () => {
        setOptionProfile(!optionProfile);
    };
    const logoutSession = async () => {
        await logout(accessToken, setRefreshToken);
        window.location.href = "/auth/login";
    }
    return (
        <>
            <nav className="flex justify-center md:justify-end cursor-pointer relative" onClick={handleProfileClick}>
                <ul className="flex items-center gap-2">
                    <li className="flex items-center gap-1">
                        {isLoading ? <Skeleton className="h-3 w-4/5 rounded-lg"/> : userInformation.name?.charAt(0)?.toUpperCase() + userInformation.name?.slice(1) }<RiArrowDownSLine />
                    </li>
                </ul>
                {optionProfile && (
                    <div className='absolute top-12 right-0 bg-white w-50 p-4 rounded-lg shadow-md'>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link to="account-setting" className='flex items-center gap-2 p-3 hover:bg-gray-100'>
                                    <RiSettings3Line /> Configuración
                                </Link>
                            </li>
                            <li>
                                <div className='flex items-center gap-2 p-3 hover:bg-gray-100' onClick={logoutSession}>
                                    <RiLogoutBoxLine /> Cerrar sesión
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Profile