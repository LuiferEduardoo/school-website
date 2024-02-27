import arrayIcons from "./arrayIcons";
import { FaFile } from "react-icons/fa";

const FileIcons = (props) => {
    const IconComponent = arrayIcons(props.color)[props.extension];
    return  IconComponent || <FaFile />
}

export default FileIcons