import { Link } from 'react-router-dom';
import { RiUserFill, RiCalendarEventLine, RiCalendarCheckFill   } from 'react-icons/ri';
import { MdMarkEmailUnread } from 'react-icons/md';
const ProtectedLinks = ({ isActive }) => {
  return (
    <>
      <li>
        <Link
          to="users-management"
          className={`flex items-center gap-3 p-4 ${
            isActive("/users-management") &&
            "bg-gray-200 rounded-lg transition-colors"
          }`}
        >
          <RiUserFill />
          Gestión de usuarios
        </Link>
      </li>
      <li>
        <Link
          to="admision-request"
          className={`flex items-center gap-3 p-4 ${
            isActive("/admision-request") &&
            "bg-gray-200 rounded-lg transition-colors"
          }`}
        >
          <MdMarkEmailUnread />
          Solicitudes de admisión
        </Link>
      </li>
      <li>
        <Link
          to="calendar"
          className={`flex items-center gap-3 p-4 ${
            isActive("/calendar") && "bg-gray-200 rounded-lg transition-colors"
          }`}
        >
          <RiCalendarEventLine />
          Calendario
        </Link>
      </li>
      <li>
        <Link
          to="schedule"
          className={`flex items-center gap-3 p-4 ${
            isActive("/schedule") && "bg-gray-200 rounded-lg transition-colors"
          }`}
        >
          <RiCalendarCheckFill />
          Horario
        </Link>
      </li>
    </>
  );
};

export default ProtectedLinks