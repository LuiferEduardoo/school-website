import { useDisclosure } from "@nextui-org/react";
import TableContent from "./TableContent";
import ButtonCreate from "./ButtonCreate";
import { FilterComponent } from "./Filter";
import Modal from "./Modal"
import Pagination from "./Pagination"


const View = ({ optionsFilter, setAllSelect, rows, columns, selectedKeys, setSelectedKeys, isAllSelect, nameElement, elementView, handleView, elementPath, handleCreate, handleEdit }) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleModalDelete = (ids) => {
        onClose();
    }
    const handleOpenModalDelete = (ids) => {
        onOpen()
    }
    return (
        <div className="flex flex-col content-between h-full gap-4">
            <div>
                <ButtonCreate handleCreate={handleCreate}/>
                <FilterComponent options={optionsFilter} setAllSelect={setAllSelect} selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} onOpenModalDelete={onOpen} />
                <TableContent rows={rows} columns={columns} selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} isAllSelect={isAllSelect} elementView={elementView} handleView={handleView} handleEdit={handleEdit} handleOpenModalDelete={handleOpenModalDelete} />
            </div>
            <Modal isOpen={isOpen} onClose={onClose} setSelectedKeys={setSelectedKeys} nameElement={nameElement} handleDelete={handleModalDelete} />

            <div className="mt-auto">
                <Pagination />
            </div>
        </div>
    );
}

export default View