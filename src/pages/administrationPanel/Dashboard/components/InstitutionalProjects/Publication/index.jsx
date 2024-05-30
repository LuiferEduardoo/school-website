import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./../../../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "./../../../../../../providers/AdministrationPanelContext";
import { getInstitutionalProyectsPublications } from "../../../../../../services/institutionalProjectsPublication.service";
import { Skeleton } from "@nextui-org/react";
import PublicationComponent from "./PublicationComponent";

const Publication = (props) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } =
        useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);
    const [publications, setPublications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPublication = async () => {
            setIsLoading(true);
            try {
                const parameters = {
                    limit: 4,
                    author: userInformation.id,
                };
                const response = await getInstitutionalProyectsPublications(
                    accessToken,
                    setAccessToken,
                    refreshToken,
                    setRefreshToken,
                    props.idProyect,
                    parameters
                );
                setPublications(response.elements);
            } finally {
                setIsLoading(false);
            }
        };
        getPublication();
    }, []);

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-4">
            {isLoading ? (
                <>
                    <Skeleton className="w-3 h-4/5 rounded-lg col-span-4" />
                    {
                        [...Array(4)].map((_, index) => (
                            <Skeleton key={index} className="w-auto h-80 rounded-lg" />
                        ))
                    }
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold mb-4 col-span-4">
                        Tus últimas publicaciones:
                    </h3>
                    {publications.map(
                        (
                            {
                                publication,
                                ImageInstitutionalProjectPublication,
                            },
                            index
                        ) => (
                            <PublicationComponent
                                index={index}
                                title={publication.title}
                                content={publication.content}
                                image={
                                    ImageInstitutionalProjectPublication[0]
                                        .image.file.url
                                }
                            />
                        )
                    )}
                </>
            )}
        </section>
    );
};

export default Publication;
