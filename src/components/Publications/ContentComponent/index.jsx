import { useContext } from "react";
import { PublicationsContext } from ".."

const ContentComponent = () => {
    const {content} = useContext(PublicationsContext);
    return (
        <section className="mt-2 prose max-w-none" dangerouslySetInnerHTML={{__html: content}} />
    )
}

export default ContentComponent