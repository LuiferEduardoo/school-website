import Select from "./Select";
import Options from "./Options";

const SelectComponet = (props) => {
    return(
        <section className="flex justify-start items-center gap-4 my-2">
            <Select />
            <Options />
        </section>
    )
}

export default SelectComponet