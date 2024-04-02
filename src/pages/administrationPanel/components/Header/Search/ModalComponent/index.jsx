import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import Header from "./Header"
import Body from "./Body";

const ModalComponent = (props) => {
    const [search, setSearch] = useState('');
    return (
        <>
            <Modal 
                size='lg' 
                isOpen={props.isOpen} 
                onClose={props.onClose}
                hideCloseButton={true} 
                scrollBehavior="inside"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <Header 
                                search={search}
                                setSearch={setSearch}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <Body 
                                search={search}
                                onClose={props.onClose}
                            />
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalComponent