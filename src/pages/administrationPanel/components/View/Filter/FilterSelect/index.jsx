import { useContext } from 'react';
import { ViewContext } from "../..";
import Filter from "./Filter";

const FilterSelect = () => {
    const { optionsFilter } = useContext(ViewContext);
    return (
        <>
            {optionsFilter.map((option, index) => (
                <Filter 
                    option={option}
                    key={index}
                />
            ))}
        </>
    )
}

export default FilterSelect