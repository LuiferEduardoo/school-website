import React, { useEffect } from 'react';
import { Checkbox } from "@nextui-org/react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { Tooltip } from "@nextui-org/react";

const Rows = (prosp) => {

    useEffect(() => {
        const newSelectedKeys = new Set(prosp.selectedKeys);
        if (prosp.isAllSelect) {
            // Si isAllSelect es true, agregar todos los elementos
            prosp.rows.forEach(item => newSelectedKeys.add(item.id));
        } else {
            // Si isAllSelect es false, borrar todos los elementos
            prosp.rows.forEach(item => newSelectedKeys.delete(item.id));
        }
        prosp.setSelectedKeys(newSelectedKeys);
    }, [prosp.isAllSelect]);    
    
    const toggleSelection = (key) => {
        const newSelectedKeys = new Set(prosp.selectedKeys);
        if (prosp.selectedKeys.has(key)) {
            newSelectedKeys.delete(key);
        } else {
            newSelectedKeys.add(key);
        }
        prosp.setSelectedKeys(newSelectedKeys);
    };


    const renderCellContent = (column, item) => {
        switch (column.key) {
            case "select":
                return (
                    <Checkbox
                        isSelected={prosp.selectedKeys.has(item.id)}
                        onChange={() => toggleSelection(item.id)}
                    />
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        {prosp.elementView?.map((element) =>(
                            <Tooltip key={element.key} content={`Ver ${element.label}`}>
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => prosp.handleView(item.id, element.label)}>
                                    <IoEyeSharp />
                                </span>
                            </Tooltip>
                        ) ) 
                        }
                        <Tooltip content="Editar">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => prosp.handleEdit(item.id)}>
                                <BiEditAlt />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Borrar">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => prosp.handleOpenModalDelete(item.id)}>
                                <MdOutlineDeleteOutline />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return item[column.key]?.image ? (
                    <div className="flex items-center">
                        <div className={`${item[column.key].image.styleContainer}`}>
                            <img
                                className={`object-cover w-full h-full ${item[column.key].image.styleImage}`}
                                src={item[column.key].image.url}
                                alt={item[column.key].title}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {item[column.key].title}
                            </div>
                        </div>
                    </div>
                ) : item[column.key];
        }
    };

    return (
        <>
            {prosp.rows.map((item) => (
                <tr key={item.id} className={` ${prosp.selectedKeys.has(item.id) && 'bg-gray-50'} hover:bg-gray-50`}>
                    {prosp.columns.map((column) => (
                        <td
                            key={column.key}
                            className="px-4 py-4 whitespace-nowrap text-sm text-gray-900"
                        >
                            {renderCellContent(column, item)}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
};

export default Rows;