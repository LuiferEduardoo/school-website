import { useContext } from 'react';
import { ViewContext } from "../..";
import { Select, SelectItem } from '@nextui-org/react';

const Filter = ({ option }) => {
    const { valueFilter, setValueFilter } = useContext(ViewContext);

    const handleSelectionChange = (selectedKeys) => {
        // Actualiza el valor del filtro específico en el estado
        setValueFilter(prevState => ({
            ...prevState,
            [option.name]: selectedKeys
        }));
    };

    return (
        <Select
            label={option.name}
            selectionMode={option.selectionMode}
            placeholder="Seleccione los filtros"
            selectedKeys={valueFilter[option.name] || []}
            className="max-w-32"
            onSelectionChange={handleSelectionChange}
        >
            {option.options.map((option) => (
                <SelectItem key={option.valueKey} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default Filter;