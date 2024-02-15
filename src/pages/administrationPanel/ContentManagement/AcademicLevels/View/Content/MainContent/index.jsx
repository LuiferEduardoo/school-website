import { useNavigate } from "react-router-dom";
import ContentView from './../ContentView'
import {rows, columns, optionsFilter} from './data'

const MainContent = () => {
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    }

    const handleCreate = () => {
        navigate('create');
    }

    return (
        <ContentView
            title="Niveles academicos"
            elementName="niveles academicos"
            elementView={[
                {
                    key: 'course',
                    label: 'Cursos'
                },
                {
                    key: 'subject',
                    label: "Asignaturas"
                }
            ]}
            rows={rows}
            columns={columns}
            optionsFilter={optionsFilter}
            handleCreate={handleCreate}
            handleEdit={handleEdit}
        />
    )
}

export default MainContent