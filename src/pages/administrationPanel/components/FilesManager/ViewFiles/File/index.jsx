import React from "react";
import columns from "./columns";
import Rows from "./Rows";

const File = (props) => {
    return (
        <>
            <div className="col-span-5 overflow-x-auto">
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
                            files={props.files}
                            columns={columns} 
                            selectedKeys={props.selectedKeys} 
                            setSelectedKeys={props.setSelectedKeys} 
                            setSelectedFile={props.setSelectedImage}
                        />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default File