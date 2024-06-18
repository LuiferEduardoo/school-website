import { useEffect, useState } from "react";
import { getInstitutionalProyectsPublications } from "../../services/institutionalProjectsPublication.service";
import PreviewPublications from "../PreviewPublications";
import { Skeleton, Pagination } from "@nextui-org/react";

const Publications = (props) => {
    const [publications, setPublications] = useState([]);
    const [offset, setOffset] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const callToAPI = async() => {
            try{
                if(props.id && props.publication){
                    const params = {
                        offset: offset - 1,
                    };
                    setIsLoading(true);
                    const response = await getInstitutionalProyectsPublications(null, null, null, null, props.id, params, null, true);
                    setPublications(response.elements);
                    setTotalPage(response.totalPages)
                }
            } finally{
                setIsLoading(false)
            }
        }
        callToAPI()
    }, [offset])
    return (
        (props.id && props.publication) && (
            <section className="px-8 py-10 bg-gray-100">
                <h2 className="text-2xl font-bold tracking-tighter">
                    Publicaciones:
                </h2>
                <section className="py-5 grid grip-cols-1 lg:grid-cols-3 gap-4">
                    {isLoading ? 
                        [...Array(8)].map((_, index) => (
                            <Skeleton
                                className="w-full h-[26rem] rounded-md"
                                key={index}
                            />
                        ))
                        : (
                        publications.map(publication => (
                            <PreviewPublications 
                                key={publication.id}
                                link={publication.publication.link}
                                title={publication.publication.title}
                                image={publication.ImageInstitutionalProjectPublication[0].image.file.url}
                                createdAt={publication.publication.createdAt}
                                content={publication.publication.content}
                            />
                        ))
                    )}
                </section>
                <section className="flex justify-end mt-auto">
                    {totalPage > 1 && (
                        <Pagination
                            showControls
                            total={totalPage}
                            page={offset}
                            onChange={setOffset}
                        />
                    )}
                </section>
            </section>
        )
    )
}

export default Publications