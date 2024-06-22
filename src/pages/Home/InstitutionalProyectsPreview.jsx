import InstitutionalProyectsPreview from "../../components/InstitutionalProyectsPreview";

const InstitutionalProyectsPreviewComponent = () => {
    return (
        <section className="space-y-4">
            <InstitutionalProyectsPreview 
                title="Proyectos Institucionales Destacados"
                params={
                    {important: true}
                }
            />
        </section>
    )
}

export default InstitutionalProyectsPreviewComponent;