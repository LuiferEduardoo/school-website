import PageNotFounde from "./PageNotFounde";
import PageErrorServer from "./PageErrorServer";
import PageUnauthorized from "./PageUnauthorized";

const PagesError = (props) => {
    let RenderComponente = PageErrorServer;

    if(props.error === 404){
        RenderComponente = PageNotFounde;
    } else if(props.error === 401) {
        RenderComponente = PageUnauthorized
    }
    return (
        <RenderComponente />
    )
}

export default PagesError