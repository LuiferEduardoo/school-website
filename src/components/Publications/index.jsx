import React, { createContext } from "react";
import Header from "./Header";
import ContentComponent from "./ContentComponent";
import Authors from "./Authors";

export const PublicationsContext = createContext() ;

const Publications = (props) => {
    return(
        <PublicationsContext.Provider value={{
            title: props?.title,
            createdAt: props.createdAt,
            timeDuration: props.timeDuration,
            imageUrl: props?.imageUrl,
            imageName: props.imageName,
            content: props?.content,
            authors: props?.authors
        }}>
            <article className="max-w-4xl mx-auto p-4">
                <Header />
                <ContentComponent />
                <Authors />
            </article>
        </PublicationsContext.Provider>
    )
}

export default Publications