import { Link } from 'react-router-dom';

const contentManagementOptions = [
  { path: 'content-management/academic-levels', label: 'Niveles académicos' },
  { path: 'content-management/news', label: 'Noticias' },
  { path: 'content-management/institutional-projects', label: 'Proyectos institucionales' },
  { path: 'content-management/banners', label: 'Banners' },
];

const ShowOptions = ({ isActive }) => {
    return (
      <>
        <ul className='flex flex-col gap-3 pl-11 pt-2'>
          {contentManagementOptions.map((option, index) => (
            <li key={index}>
              <Link to={option.path} className={`gap-3 ${isActive(`/${option.path}`) && 'text-sky-700 transition-colors'}`}>{option.label}</Link>
            </li>
          ))}
        </ul>
      </>
    );
}

export {ShowOptions, contentManagementOptions}