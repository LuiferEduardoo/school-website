import { IoIosClose } from "react-icons/io";

const Delete = (props) => {
    const verifyIfClassificationExisting = (updatedClassifications) => {
        if(updatedClassifications?.isExisting){
            const updatedIdEliminateExistingClassification = props.IdEliminateExistingClassification.add(updatedClassifications.id);
            props.setIdEliminateExistingClassification(updatedIdEliminateExistingClassification);
        }
    }
    const handleDelete = () => {
        props.setClassifications((prevClassifications) => {
            const updatedClassifications = [...prevClassifications];
            if(props.deleteAll){
                updatedClassifications.forEach((c) => {
                    verifyIfClassificationExisting(c)
                })
                return []
            }
            verifyIfClassificationExisting(props.classification)
            updatedClassifications.splice(props.index, 1);
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