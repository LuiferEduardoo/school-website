import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutBoxLine 

} from "react-icons/ri";

const Profile = () => {
    const [optionProfile, setOptionProfile] = useState(false);
    const handleProfileClick = () => {
        setOptionProfile(!optionProfile);
    };
    return (
        <>
            <nav className="flex justify-center md:justify-end cursor-pointer relative" onClick={handleProfileClick}>
                <ul className="flex items-center gap-2">
                    <li className="flex items-center gap-1">
                        Jorge<RiArrowDownSLine />
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
                            <Link to="logout" className='flex items-center gap-2 p-3 hover:bg-gray-100'>
                                <RiLogoutBoxLine /> Cerrar sesión
                            </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Profile