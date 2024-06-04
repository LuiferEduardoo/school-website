import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthContext";
import {
    getFiles,
    postFiles,
    deleteFiles,
} from "../../../services/files.service";
import FilesManager from "../components/FilesManager";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";

const FilesManagementComponent = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.split("/").pop();
    const folder = "application";

    const { accessToken, setAccessToken, refreshToken, setRefreshToken } =
        useContext(AuthContext);

    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [selectedImage, setSelectedImage] = useState(null);
    const [filesUpload, setFilesUpload] = useState([]);

    const [filesType, setFilesType] = useState("");
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updatePage, setUpdatePage] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false);
    const [isLoadingButton, setIsLoadingButton] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setFiles([]);
        setUpdatePage(true);
        setSelectedKeys(new Set([]));
        setOffset(0);
    }, [lastPathSegment]);

    useEffect(() => {
        const callToAPI = async (fileType) => {
            setFilesType(fileType);
            const parameters = {
                limit: 6,
                offset: offset,
            };
            const response = await getFiles(
                accessToken,
                setAccessToken,
                refreshToken,
                setRefreshToken,
                fileType,
                null,
                parameters
            );
            const fileIds = files.map((file) => file.id);
            const filteredElements = response.elements.filter(
                (element) => !fileIds.includes(element.id)
            );
            if (filteredElements.length > 0) {
                setFiles([...files, ...filteredElements]);
                setIsShowButton(response.totalPages > 1);
            } else {
                setIsShowButton(false);
            }
        };
        const verifyLastPath = async () => {
            if (lastPathSegment === "photos") {
                await callToAPI("image");
            } else if (lastPathSegment === "documents") {
                await callToAPI("document");
            }
        };
        const handleFiles = async () => {
            try {
                if (updatePage) {
                    setIsLoading(true);
                    setFiles([]);
                    setOffset(0);
                }
                verifyLastPath();
            } finally {
                setIsLoading(false);
                setUpdatePage(false);
                setIsLoadingButton(false);
            }
        };
        handleFiles();
    }, [updatePage, offset]);

    useEffect(() => {
        const uploadBanners = async () => {
            if (filesUpload.length > 0) {
                try {
                    toast.loading("Subiendo");
                    // Carga de banners individuales
                    await Promise.all(
                        filesUpload.map(async (file) => {
                            await postFiles(
                                accessToken,
                                setAccessToken,
                                refreshToken,
                                setRefreshToken,
                                {
                                    files: file,
                                    folder,
                                    fileType: filesType,
                                    isPublic: true,
                                }
                            );
                        })
                    );
                    setFilesUpload([]);

                    toast.dismiss();
                    toast.success("Archivo subidos con exito");
                    setUpdatePage(true);
                } catch (error) {
                    toast.dismiss();
                    toast.error(
                        "No se pudieron subir los archivos, vuelte a intentar en un rato"
                    );
                    setFilesUpload([]);
                }
            }
        };

        uploadBanners();
    }, [filesUpload]);

    const handleDelete = async (ids) => {
        try {
            toast.loading("Borrando");
            const idFiles = [...ids];
            for (let index = 0; index < idFiles.length; index++) {
                await deleteFiles(
                    accessToken,
                    setAccessToken,
                    refreshToken,
                    setRefreshToken,
                    idFiles[index]
                );
            }
            setSelectedImage(null);
            toast.dismiss();
            toast.success("Archivos borrado con exito");
            setUpdatePage(true);
            setSelectedKeys(new Set([]));
        } catch (error) {
            toast.dismiss();
            toast.error(
                "No se pudieron borrar los archivos, vuelte a intentar en un rato"
            );
        }
    };
    const fetchMoreData = () => {
        setIsLoadingButton(true);
        setOffset((prevOffset) => prevOffset + 1);
    };

    return (
        <div className="flex flex-col gap-4">
            <FilesManager
                isLoading={isLoading}
                updatePage={updatePage}
                setUpdatePage={setUpdatePage}
                files={files}
                acceptFiles={filesType}
                fileType={filesType}
                viewInformationImage
                setFiles={setFilesUpload}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                handleDelete={handleDelete}
            />
            {isShowButton && !isLoading && (
                <Button
                    color="primary"
                    isLoading={isLoadingButton}
                    onPress={fetchMoreData}
                >
                    Mostrar más
                </Button>
            )}
        </div>
    );
};

export default FilesManagementComponent;
