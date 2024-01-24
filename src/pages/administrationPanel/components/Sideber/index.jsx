import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiBookContent } from 'react-icons/bi';
import { RiDashboardLine, RiUserFill, RiFileCloudLine, RiCalendarEventLine, RiCalendarCheckFill, RiCloseFill, RiMore2Fill } from 'react-icons/ri';
import { MdMarkEmailUnread } from 'react-icons/md';

const Sideber = () => {
  const [showSideber, setshowSideber] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === `/administration-panel${path}`;
  };

  return (
    <>
      <div className={`bg-white h-full p-8 border-r fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showSideber ? "left-0" : "-left-full"}`}>
          <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
            <img
              src="../src/assets/img/blank-profile-picture.webp"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
            />
            <h1 className="text-xl text-black font-bold">Jorge Luis Trejo</h1>
            <p className="bg-primary-100 py-2 px-4 rounded-full text-black">
              Coordinador
            </p>
        </div>
        <nav className='text-gray-500 font-semibold'>
          <ul>
            <li>
              <Link to="" className={`flex items-center gap-3 p-4 ${isActive('') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <RiDashboardLine />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="content-management" className={`flex items-center gap-3 p-4 ${isActive('/content-management') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <BiBookContent />
                Gestión de contenido
              </Link>
            </li>
            <li>
              <Link to="users-management" className={`flex items-center gap-3 p-4 ${isActive('/users-management') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <RiUserFill />
                Gestión de usuarios
              </Link>
            </li>
            <li>
              <Link to="admision-request" className={`flex items-center gap-3 p-4 ${isActive('/admision-request') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <MdMarkEmailUnread />
                Solicitudes de admisión
              </Link>
            </li>
            <li>
              <Link to="calendar" className={`flex items-center gap-3 p-4 ${isActive('/calendar') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <RiCalendarEventLine  />
                Calendario
              </Link>
            </li>
            <li>
              <Link to="schedule" className={`flex items-center gap-3 p-4 ${isActive('/schedule') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <RiCalendarCheckFill  />
                Horario
              </Link>
            </li>
            <li>
              <Link to="files-management" className={`flex items-center gap-3 p-4 ${isActive('/files-management') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                <RiFileCloudLine />
                Gestión de archivos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => setshowSideber(!showSideber)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-black z-50"
      >
        {showSideber ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sideber;