import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Helmet } from "react-helmet";
import { Skeleton } from "@nextui-org/react";
import { AuthContext } from "../../../../../providers/AuthContext";
import FilesManager from './../../../components/FilesManager';
import { getBanners, postBanners, deleteBanners } from '../../../../../services/banners.service';

const Edit = () => {
    const { banner } = useParams();
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useContext(AuthContext);
    const [updatePage, setUpdatePage] = useState(false);
    const navigate = useNavigate();

    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [filesUpload, setFilesUpload] = useState([]);
    const [filesAplicationUpload, setFilesApplicationUpload] = useState([]);

    useEffect(() => {
        const callAPI = async() => {
            try {
                setIsLoading(true);
                const response = await getBanners(accessToken, setAccessToken, refreshToken, setRefreshToken, banner);
                setImages(response);
            } catch(error){
                navigate("..");
            } finally{
                setIsLoading(false);
                setUpdatePage(false);
            }
        }
        callAPI()
    }, [updatePage]);

    useEffect(() => {
        const uploadBanners = async () => {
            if(filesUpload.length > 0 || filesAplicationUpload.length > 0){
                try {
                    toast.loading('Subiendo')
                    // Carga de banners individuales
                    if (filesUpload.length > 0) {
                        await Promise.all(filesUpload.map(async (file) => {
                            await postBanners(accessToken, setAccessToken, refreshToken, setRefreshToken, banner, { files: file });
                        }));
                        setFilesUpload([]);
                    }
                    
                    // Carga de banners de aplicación
                    if (filesAplicationUpload.length > 0) {
                        await postBanners(accessToken, setAccessToken, refreshToken, setRefreshToken, banner, { ids: filesAplicationUpload.map(file => file.id).join(',') });
                        setFilesApplicationUpload([]);
                    }
                    toast.dismiss();
                    toast.success('Banner subidos con exito');
                    setUpdatePage(true);
                } catch (error) {
                    toast.dismiss();
                    toast.error('No se pudieron subir los banner, vuelte a intentar en un rato')
                }
            }
        };
    
        uploadBanners();
    }, [filesUpload, filesAplicationUpload]);    

    const handleDelete = async(ids) => {
        try{
            toast.loading('Borrando');
            const idImages = [...ids];
            const bannersToDelete = images.filter(image => idImages.includes(image.imageBanner.imageId));
            const data = {
                idsBanners: bannersToDelete.map(banner => banner.id).join(',')
            }
            await deleteBanners(accessToken, setAccessToken, refreshToken, setRefreshToken, banner, data)
            
            toast.dismiss();
            toast.success('Banner borrado con exito');
            setUpdatePage(true);
            setSelectedKeys(new Set([]));
        } catch(error){
            toast.dismiss();
            toast.error('No se pudieron borrar los banner, vuelte a intentar en un rato')
        }

    }

    return (
        <>
            <Helmet>
                <title>Editar {banner} </title>
            </Helmet>
            <FilesManager
                isLoading={isLoading}
                files={images.map(image => image?.imageBanner?.image)}
                acceptFiles='image'
                fileType='image'
                fileSize={{
                    width: 1600,
                    height: 400
                }}
                otherElement
                setFiles={setFilesUpload}
                setFilesApplication={setFilesApplicationUpload}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                handleDelete={handleDelete}
            />
            </>
    )
}

export default Edit