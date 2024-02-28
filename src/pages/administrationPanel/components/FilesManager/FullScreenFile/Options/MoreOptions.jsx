import {Listbox, ListboxItem} from "@nextui-org/react";
import axios from 'axios';
import { saveAs } from 'file-saver';
import { toast } from 'sonner';

const MoreOptions = (props) => {
    const handleDownload = (url, filename) => {
        const downloadPromise = async () => {
            try {
                const response = await axios.get(url, { responseType: 'blob' });
                const blob = new Blob([response.data]);
                saveAs(blob, filename);
                return { name: 'Descargado' };
            } catch (error) {
                throw new Error('No se pudo descargar');
            }
        }
    
        toast.promise(downloadPromise(), {
            loading: 'Descargando...',
            success: (data) => `${data.name}`,
            error: (err) => `${err.message}`,
        });
    }
    const handleCopy = async(url) => {
        try{
            await navigator.clipboard.writeText(url)
            toast.success('Se copió el enlace')
        } catch(error){
            toast.warning('No se pudo copiar el enlace')
        }
    }
    return (
        <section className="absolute top-12 right-0">
            <Listbox>
                <ListboxItem key="home" onClick={() => handleDownload(props.files[props.selectedImage].file.url, props.files[props.selectedImage].file.name)}>
                    Descargar
                </ListboxItem>
                <ListboxItem key="about" onClick={() => handleCopy(props.files[props.selectedImage].file.url)}>
                    Copiar vinculo
                </ListboxItem>
            </Listbox>
        </section>
    );
}

export default MoreOptions