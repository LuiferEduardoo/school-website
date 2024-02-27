import { FaRegFilePdf } from "react-icons/fa6";
import { FaFileWord, FaHtml5, FaImage } from "react-icons/fa";
import { BsFiletypeTxt } from "react-icons/bs";
import { SiMicrosoftexcel, SiMicrosoftpowerpoint  } from "react-icons/si";
import { TfiVideoClapper } from "react-icons/tfi";
import { LuFileAudio } from "react-icons/lu";
import { GoFileZip } from "react-icons/go";

export default function (color=null) {
    return {
        'pdf': <FaRegFilePdf className={`${color ? color : 'text-red-700'}`}/>,
        'doc': <FaFileWord className={`${color ? color : 'text-blue-700'}`}/>,
        'docx': <FaFileWord className={`${color ? color : 'text-blue-700'}`}/>,
        'xls': <SiMicrosoftexcel className={`${color ? color : 'text-green-700'}`} />,
        'xlsx': <SiMicrosoftexcel className={`${color ? color : 'text-green-700'}`} />,
        'text': <BsFiletypeTxt className={`${color ? color : ''}`} />,
        'csv': <BsFiletypeTxt className={`${color ? color : ''}`} />,
        'htm': <BsFiletypeTxt className={`${color ? color : ''}`} />,
        'html': <FaHtml5 className={`${color ? color : ''}`} />,
        'ppt': <SiMicrosoftpowerpoint className={`${color ? color : 'text-powerpoint-orange'}`} />,
        'pptx': <SiMicrosoftpowerpoint className={`${color ? color : 'text-powerpoint-orange'}`} />,
        'webp': <FaImage className={`${color ? color : 'text-sky-300'}`} />,
        'mp4': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'avi': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'mkv': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'mov': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'wmv': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'divx': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'h.264': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'xvid': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'rm': <LuFileAudio className={`${color ? color : 'text-rose-800'}`} />,
        'wav': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'aiff': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'au': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'flac': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'mpeg-4': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'mp3': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'aac': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'ogg': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'wma': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'dsd': <TfiVideoClapper className={`${color ? color : 'text-rose-800'}`} />,
        'zip': <GoFileZip className={`${color ? color : ''}`} />,
        'rar': <GoFileZip className={`${color ? color : ''}`} />,
        '7z': <GoFileZip className={`${color ? color : ''}`} />,
        'tar': <GoFileZip className={`${color ? color : ''}`} />,
        'gz': <GoFileZip className={`${color ? color : ''}`} />,
        'iso': <GoFileZip className={`${color ? color : ''}`} />
    }
}