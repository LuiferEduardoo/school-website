import {Checkbox} from "@nextui-org/react";

const Status = ({elementName, status, setStatus, nameStatusTrue, nameStatusFalse}) => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-500 text-sm mb-3">Estado {elementName}</span>
            <Checkbox 
                isSelected={status}
                radius="full"
                onChange={() => setStatus(true) }
            >
                {nameStatusTrue}
            </Checkbox>
            <Checkbox 
                color="default"
                isSelected={!status} 
                radius="full"
                onChange={() => setStatus(false) }
            >
                {nameStatusFalse}
            </Checkbox>
        </div>
    )
}

export default Status