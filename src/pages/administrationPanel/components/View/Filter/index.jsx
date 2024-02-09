import React, { useState } from 'react';
import Search from "./Search"
import FilterSelect from "./FilterSelect"
import Select from './Select';

const FilterComponent = ({ options, setAllSelect, selectedKeys, setSelectedKeys, onOpenModalDelete }) => {
    return (
        <>
            <div className='flex justify-between aling-center bg-white p-4 rounded'>
                <Select
                    all={setAllSelect}
                    selectedKeys={selectedKeys}
                    setSelectedKeys={setSelectedKeys}
                    onOpenModalDelete={onOpenModalDelete}
                />
                <div className='flex w-[60%] justify-end gap-4'>
                    <FilterSelect 
                        options={options}
                    />
                    <Search />
                </div>
            </div>
        </>
    )
}

export { FilterComponent }