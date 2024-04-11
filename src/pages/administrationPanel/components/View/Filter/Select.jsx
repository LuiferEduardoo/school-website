import React, { useState, useContext } from 'react';
import { ViewContext } from "..";
import { Checkbox, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Tooltip } from "@nextui-org/react";

const Select = () => {
    const { setAllSelect, selectedKeys, setSelectedKeys, handleOpenModalDelete } = useContext(ViewContext);
    
    const [isSelectedClick, setIsSelectClick] = useState(false);
    const selectNone = () => {
        setIsSelectClick(false)
        setAllSelect(false)
        setSelectedKeys(new Set([]))
    }
    const selectAll = () => {
        setIsSelectClick(true)
        setAllSelect(true)
    }
    const handleCheckboxChange = () => {
        setIsSelectClick(!isSelectedClick)
        setAllSelect(!isSelectedClick);
    };
    return (
        <div className="flex space-x-8">
            <div className="flex aling-center">
                <Checkbox isSelected={isSelectedClick || selectedKeys.size !== 0} onChange={handleCheckboxChange}></Checkbox>
                <Dropdown>
                    <DropdownTrigger>
                        <button>
                            <IoIosArrowDown className="cursor-pointer text-black/50 mb-0.5 dark:text-white/90"/>
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dynamic Actions">
                        <DropdownItem key="all" onClick={selectAll}>Todas</DropdownItem>
                        <DropdownItem key="none" onClick={selectNone}>Ninguna</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="flex items-center">
                {isSelectedClick || selectedKeys.size > 0 ? (
                        <Tooltip color="danger" content="Borrar">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleOpenModalDelete([...selectedKeys])}>
                                <MdOutlineDeleteOutline />
                            </span>
                        </Tooltip>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Select