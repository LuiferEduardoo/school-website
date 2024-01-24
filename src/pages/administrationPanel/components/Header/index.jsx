import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RiArrowDownSLine,
  RiSearchLine,
  RiSettings3Line,
  RiLogoutBoxLine 

} from "react-icons/ri";

const Header = ({userInfo}) => {
  const [optionProfile, setOptionProfile] = useState(false);
  const handleProfileClick = () => {
    setOptionProfile(!optionProfile);
  };
    return (
      <>
        <header className="flex gap-4 items-center justify-around p-4 md:px-8 lg:px-12 w-full bg-white fixed top-0">
          {/* Search */}
          <form className="w-full md:[40%] lg:w-[20%] md:-order-none">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-3" />
              <input
                type="text"
                className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
                placeholder="Search"
              />
            </div>
          </form>
          <nav className="flex justify-center md:justify-end cursor-pointer" onClick={handleProfileClick}>
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-1">
                Jorge<RiArrowDownSLine />
              </li>
            </ul>
            {optionProfile && 
              <div className='fixed top-20 right-2 bg-white w-50 p-8 rounded'>
                <ul className='gap-4'>
                  <li>
                    <Link to="account-setting" className='flex items-center gap-3 p-2'>                    
                      <RiSettings3Line /> Configuración de la cuenta
                    </Link>
                  </li>
                  <li>
                  <Link to="logout" className='flex items-center gap-3 p-2'>                    
                    <RiLogoutBoxLine /> Cerrar sección
                  </Link>
                  </li>
                </ul>
              </div>
            }
          </nav>
        </header>
      </>
    );
  };

export default Header;
