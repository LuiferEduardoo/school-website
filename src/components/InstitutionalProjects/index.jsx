import Information from "./Information";
import Publications from "./Publications";
import Coordinators from "./Coordinators";

const InstitutionalProyects = (props) => {
    return (
        <article className="w-full py-8">
            <Information
                nameImage={props.nameImage}
                image={props.image}
                title={props.title}
                content={props.content}
            />
            <Publications 
                id={props.id}
                publication={props.publication}
            />
            <Coordinators 
                coordinators={props.coordinators}
            />
        </article>
    );
};

export default InstitutionalProyects;