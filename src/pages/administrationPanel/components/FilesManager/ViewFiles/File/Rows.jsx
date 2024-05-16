import FileIcons from "../../../FileIcons";

const Rows = (props) => {
    const toggleSelection = (key) => {
        const newSelectedKeys = new Set(props.selectedKeys);
        if (!props.selectedKeys.has(key)) {
            newSelectedKeys.add(key);
            props.setSelectedKeys(newSelectedKeys);
        }
    };

    const handleToggleClick = (index) => {
        props.setSelectedFile(index);
    };

    return (
        <>
            {props.files.map((item, index) => (
                <tr key={item.id} className={` ${props.selectedKeys.has(item.id) && 'bg-gray-50'} hover:bg-gray-50`}>
                    {props.columns.map((column) => (
                        <td
                            key={column.key}
                            className="px-4 py-4 whitespace-nowrap text-sm text-gray-900"
                        >
                            {
                                <div 
                                    className="flex gap-4 items-center text-lg cursor-pointer"
                                    onClick={() => toggleSelection(item.file.id)}
                                    onDoubleClick={() => handleToggleClick(index)}
                                >
                                    <FileIcons extension={item.file.ext} />
                                    <span>{item.file.name}</span>
                                </div>
                            }
                        </td>
                    ))}
                </tr>
            ))}
        </>
    )
}

export default Rows