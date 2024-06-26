import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Document = (props) => {
    const dock = [{
        uri: props.url,
        fileType: props.extent.replace(/\./g, '')
    }];
    const headers = props.isPublic ? {} : {
        Authorization: `Bearer ${props.accessToken}`
    };
    return ( 
        <>
            <DocViewer 
                documents={dock} 
                config={{
                    header: {
                        disableHeader: true,
                        disableFileName: true,
                        retainURLParams: false,
                    }
                    }}
                    prefetchMethod="GET" 
                    requestHeaders={headers}
                    pluginRenderers={DocViewerRenderers} 
                    className="max-h-[85%] max-w-[60%]"
            />
        </>
    )
}

export default Document