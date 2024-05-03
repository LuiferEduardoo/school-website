import React, { useState, createContext } from 'react';
import { useDisclosure } from "@nextui-org/react";
import SkeletonContent from './Skeleton';
import TableContent from "./TableContent";
import ButtonCreate from "./ButtonCreate";
import { FilterComponent } from "./Filter";
import Modal from "./Modal";
import Pagination from "./Pagination";

export const ViewContext = createContext();

const View = (props) => {
    const { optionsFilter, valueFilter, setValueFilter, rows, columns, selectedKeys, setSelectedKeys, nameElement, elementView, totalPage, search, setSearch, handleView, handleCreate, handleEdit, handleDelete, offset, setOffset } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isAllSelect, setAllSelect] = useState(false);
    const [elimintateId, setEliminateId] = useState([])

    const handleOpenModalDelete = (ids) => {
        onOpen()
        setEliminateId(ids)
    }
    const contextValue = {
        optionsFilter,
        valueFilter, 
        setValueFilter,
        setAllSelect,
        rows,
        columns,
        selectedKeys,
        setSelectedKeys,
        isAllSelect,
        nameElement,
        elementView,
        totalPage,
        search,
        setSearch,
        handleView,
        handleCreate,
        handleEdit,
        handleDelete,
        isOpen,
        onClose,
        onOpen,
        handleOpenModalDelete,
        offset,
        setOffset
    };
    return (
        props.isLoading ? (
            <SkeletonContent
                create={props.create}
            />
        ) : (
            <ViewContext.Provider value={contextValue}>
                <div className="flex flex-col content-between h-full gap-4">
                    <div>
                        {props.create && (
                            <ButtonCreate />
                        )}
                        <FilterComponent />
                        <TableContent/>
                    </div>
                    <Modal 
                        elimintateId={elimintateId}
                    />
                    <div className="mt-auto">
                        <Pagination />
                    </div>
                </div>
            </ViewContext.Provider>
        )
    );
}


export default View