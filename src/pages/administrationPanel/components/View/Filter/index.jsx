import React from 'react';
import Search from "./Search"
import FilterSelect from "./FilterSelect"
import Select from './Select';

const FilterComponent = () => {
    return (
        <>
            <div className='flex justify-between aling-center bg-white p-4 rounded'>
                <Select />
                <div className='flex w-[60%] justify-end gap-4'>
                    <FilterSelect />
                    <Search />
                </div>
            </div>
        </>
    )
}

export { FilterComponent }