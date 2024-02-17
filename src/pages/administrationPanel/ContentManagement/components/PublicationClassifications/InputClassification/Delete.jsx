import { IoIosClose } from "react-icons/io";

const Delete = (props) => {
    const verifyIfClassificationExisting = (updatedClassifications, classification) => {
        if(updatedClassifications?.isExisting){
            const updatedIdEliminateExistingClassification = new Set(props.IdEliminateExistingClassification);
            updatedIdEliminateExistingClassification.add(props.deleteAll ? updatedClassifications.id : classification.id);
            props.setIdEliminateExistingClassification(updatedIdEliminateExistingClassification);
        }
    }
    const handleDelete = () => {
        props.setClassifications((prevClassifications) => {
            const updatedClassifications = [...prevClassifications];
            if(props.deleteAll){
                prevClassifications.forEach((c) => {
                    verifyIfClassificationExisting(c)
                })
                return []
            }
            updatedClassifications.splice(props.index, 1);
            verifyIfClassificationExisting(updatedClassifications, props.classification)
            return updatedClassifications;
        });
    };
    return (
        <span className={`bg-gray-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer ${props.style}`} onClick={handleDelete}>
            <IoIosClose className='text-white' />
        </span>
    )
}

export default Delete