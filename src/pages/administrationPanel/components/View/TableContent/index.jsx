import React from 'react';
import Rows from './Rows'

const TableContent = ({ rows, columns, selectedKeys, setSelectedKeys, isAllSelect, elementView, handleView, handleEdit, handleOpenModalDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-white border border-none redonde">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <Rows 
                        columns={columns} 
                        rows={rows} 
                        selectedKeys={selectedKeys} 
                        setSelectedKeys={setSelectedKeys} 
                        isAllSelect={isAllSelect} 
                        elementView={elementView}
                        handleView={handleView} 
                        handleEdit={handleEdit} 
                        handleOpenModalDelete={handleOpenModalDelete} 
                    />
                </tbody>
            </table>
        </div>
    );
}

export default TableContent