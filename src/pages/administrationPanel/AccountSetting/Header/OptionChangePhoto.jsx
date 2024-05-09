import { useState, useEffect, useContext } from "react";
import { useDisclosure} from "@nextui-org/react";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";
import { AuthContext } from "../../../../providers/AuthContext";
import { updateUser } from "../../../../services/user.service";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FaCamera } from "react-icons/fa";
import { ModalFilesApplication } from "../../components/FilesInput/ModalFilesApplication";
import { toast } from "sonner";

const OptionChangePhoto = () => {
    const { userInformation, setUpdateAllPage } = useContext(AdministrationsPanelContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [photoAplication, setPhotoAplication] = useState([]);
    const [photoDevice, setPhotoDevice] = useState();

    const handleFiles = (typeUpload) => {
        if(typeUpload === 'device'){
            document.getElementById('fileInput').click();
        } else {
            onOpen();
        }
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setPhotoDevice(file);
            onClose(); // Cierra el dropdown después de seleccionar un archivo
        } else {
            // Si el archivo no es una imagen, se puede manejar el error o informar al usuario
            toast.warning("Por favor, seleccione un archivo de imagen");
        }
    };
    
    useEffect(() => {
        const handleChangePhoto = async () => {
            let data = {}
            if(photoAplication.length > 0 || photoDevice){
                try{
                    if(photoAplication.length > 0){
                        data.idNewImage = photoAplication[0].id;
                    }
                    else if(photoDevice){
                        data.files = photoDevice;
                    }
                    setPhotoAplication([]);
                    setPhotoDevice(null);
                    toast.loading('Subiendo');
                    await updateUser(accessToken, setAccessToken, refreshToken, setRefreshToken, null, data);
                    toast.dismiss();
                    toast.success('Imagen actualizada con exito');
                    setUpdateAllPage(true)
                } catch(error){
                    toast.dismiss();
                    toast.warning(error.message);
                }
            }
        }
        handleChangePhoto();
    }, [photoAplication, photoDevice])
    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <button>
                        <div className='flex items-center gap-2 p-2 bg-gray-500 rounded-full' >
                            <FaCamera className="text-sm text-white" />
                        </div>
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="aplication">
                        <div onClick={() => handleFiles('aplication')}>
                            Cargar imagen desde aplicación
                        </div>
                    </DropdownItem>
                    <DropdownItem key="device">
                        <div onClick={() => handleFiles('device')}>
                            Cargar imagen desde dispositivo
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <ModalFilesApplication isOpen={isOpen} onClose={onClose} setFiles={setPhotoAplication}/>
            <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />
        </>
    )
}

export default OptionChangePhoto