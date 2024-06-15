import React, { createContext } from "react";
import Header from "./Header";
import ContentComponent from "./ContentComponent";

export const PublicationsContext = createContext() ;

const Publications = (props) => {
    return(
        <PublicationsContext.Provider value={{
            title: props?.title,
            createdAt: props.createdAt,
            timeDuration: props.timeDuration,
            imageUrl: props?.imageUrl,
            imageName: props.imageName,
            content: props?.content
        }}>
            <article className="max-w-4xl mx-auto p-4">
                <Header />
                <ContentComponent />
            </article>
        </PublicationsContext.Provider>
    )
}

export default Publications