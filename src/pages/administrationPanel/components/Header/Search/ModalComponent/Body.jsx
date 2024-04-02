import { useContext } from "react";
import { AdministrationsPanelContext } from "../../../../../../providers/AdministrationPanelContext";
import { Link } from 'react-router-dom';
import data from "./data";

const Body = (props) => {
    const { rolUser, superAdmin } = useContext(AdministrationsPanelContext)
    const { search, onClose } = props

    // Filtrar los datos según la búsqueda y la privacidad
    const filteredData = data.filter(d => 
        (d.name.toLowerCase().includes(search.toLowerCase())) && 
        ((d.isProtected && superAdmin.includes(rolUser)) || !d.isProtected)
    )

    const onClickLink = () => {
        onClose();
    }

    return (
        <ul className="divide-y divide-gray-200">
            {filteredData.length > 0 ? 
                filteredData.map((d, index) => (
                    <li key={index} className="py-4">
                        <Link to={d.path} className="text-blue-500 hover:text-blue-700" onClick={onClickLink}>
                            {d.name}
                        </Link>
                    </li>
                )) : (
                <div className="text-center p-10">
                    <span className="font-semibold">No hay resultados para "{search}"</span>
                    <p className="text-gray-500">Intenta buscar con algo diferente</p>
                </div>
            )}
        </ul>
    )
}

export default Body;
