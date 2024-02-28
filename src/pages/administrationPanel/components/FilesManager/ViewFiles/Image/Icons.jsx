import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";

const Icons = (props) => {
    const toggleSelection = () => {
        const newSelectedKeys = new Set(props.selectedKeys);
        if (props.selectedKeys.has(props.id)) {
            newSelectedKeys.delete(props.id);
        } else {
            newSelectedKeys.add(props.id);
        }
        props.setSelectedKeys(newSelectedKeys);
    };
    return (
        <>
            {(props.showIcon || props.selectedKeys.has(props.id)) && 
                <section className='absolute top-0 p-2 cursor-pointer text-2xl' onClick={toggleSelection}>
                    {!props.selectedKeys.has(props.id) ?
                        <MdOutlineRadioButtonUnchecked className="text-white"/>
                        : 
                        <GoCheckCircleFill className="text-blue-600" />
                    }
                </section>
            }
        </>
    )
}

export default Icons