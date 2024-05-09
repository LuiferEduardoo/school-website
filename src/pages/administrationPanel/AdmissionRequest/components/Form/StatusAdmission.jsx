import {Checkbox} from "@nextui-org/react";

const StatusAdmission = (props) => {
    return (
        <div className="flex flex-col">
            <span className="text-gray-500 text-sm mb-3">Estado admisión</span>
            <Checkbox 
                isSelected={props.status === 'En revisión'}
                radius="full"
                onChange={() => props.setStatus('En revisión') }
            >
                En revisión
            </Checkbox>
            <Checkbox 
                isSelected={props.status === 'admitido'}
                radius="full"
                onChange={() => props.setStatus('admitido') }
            >
                Admitido
            </Checkbox>
            <Checkbox 
                color="default"
                isSelected={props.status === 'No admitido'}
                radius="full"
                onChange={() => props.setStatus('No admitido') }
            >
                No admitido
            </Checkbox>
        </div>
    )
}

export default StatusAdmission