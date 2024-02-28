import React from 'react';
import Select from './Select'
import FilesUpload from './FilesUpload';

const SelectionPanel = (props) => {
    return (
        <header className="bg-gray-50 rounded-lg p-3">
            <section className="flex justify-between">
                {
                    props.selectedKeys.size > 0 ? 
                        <>
                            <Select 
                                selectedKeys={props.selectedKeys}
                                setSelectedKeys={props.setSelectedKeys}
                                files={props.files}
                            />
                        </> : 
                        <>
                            <FilesUpload 
                                acceptFiles={props.acceptFiles}
                                otherElement={props.otherElement}
                                fileSize={props.fileSize}
                            />
                        </>
                }
            </section>
        </header>
    )
}

export default SelectionPanel