import { useContext } from "react"
import { PublicationsContext } from "..";

const Authors = () => {
    const {authors} = useContext(PublicationsContext);
    const authorsString = authors?.map(author => `${author.author.user.name} ${author.author.user.lastName}`).join(', ')
    return (
        authors?.length > 0 && (
            <section className="flex gap-2 mt-10">
                <p className="font-medium">{authors?.length > 1 ? "Autores" : "Autor"}:</p>
                <p>{authorsString}</p>
            </section>
        )
    )
}

export default Authors