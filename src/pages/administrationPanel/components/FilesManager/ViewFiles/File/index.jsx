import React, { useContext, useState } from "react";
import { FilesManagerContext } from "../..";
import columns from "./columns";
import Rows from "./Rows";
import HasNoFile from "./HasNoFile";

const File = (props) => {
    const {files, selectedKeys, setSelectedKeys, setSelectedImage} = useContext(FilesManagerContext);
    return (
        <>
            {files.length === 0 ? (
                <HasNoFile />
            ) : (
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
                                files={files}
                                columns={columns} 
                                selectedKeys={selectedKeys} 
                                setSelectedKeys={setSelectedKeys} 
                                setSelectedFile={setSelectedImage}
                            />
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default File