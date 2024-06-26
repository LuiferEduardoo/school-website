import Schedule from "../../../components/Schedule";

const ScheduleContent = () => {
    return (
        <section className="p-8">
            <Schedule isReadOnly withoutToken />
        </section>
    );
};

export default ScheduleContent;
