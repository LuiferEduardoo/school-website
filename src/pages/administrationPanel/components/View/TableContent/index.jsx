import React, {useContext} from 'react';
import Rows from './Rows';
import { ViewContext } from "..";

const TableContent = () => {
    const { columns } = useContext(ViewContext)
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
                    <Rows />
                </tbody>
            </table>
        </div>
    );
}

export default TableContent