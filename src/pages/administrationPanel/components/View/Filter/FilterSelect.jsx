import { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const FilterSelect = ({ options }) => {
    const [values, setValues] = useState([]);

    return (
        <Select
            label="Filtrar"
            selectionMode="multiple"
            placeholder="Seleccione los filtros"
            selectedKeys={values}
            className="max-w-32"
            onSelectionChange={setValues}
        >
            {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default FilterSelect;
