import React, { useContext } from 'react';
import { FilesManagerContext } from '..';
import Select from './Select';
import FilesUpload from './FilesUpload';

const SelectionPanel = (props) => {
    const {selectedKeys} = useContext(FilesManagerContext);

    return (
        <header className="bg-gray-50 rounded-lg p-3">
            <section className="flex justify-between">
                {
                    selectedKeys.size > 0 ? 
                        ( 
                            <Select />
                        ) : 
                        (
                            <FilesUpload />
                        )
                }
            </section>
        </header>
    )
}

export default SelectionPanel