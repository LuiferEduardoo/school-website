import InstitutionalProyectsPreview from "../../components/InstitutionalProyectsPreview";

const InstitutionalProyectsPreviewComponent = () => {
    return (
        <section className="space-y-4">
            <h2 className="text-3xl px-8 font-bold tracking-tighter md:text-4xl/tight">Proyectos Institucionales destacados</h2>
            <InstitutionalProyectsPreview 
                link='proyectos-institucionales/'
                title="Proyectos Institucionales Destacados"
                params={
                    {important: true}
                }
            />
        </section>
    )
}

export default InstitutionalProyectsPreviewComponent;