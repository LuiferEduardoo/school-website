import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";

const ModalComponer = ({ isOpen, onClose, numberDocument, notFound, status }) => {
    const renderStatusContent = () => {
        if (status === "En revisión") {
            return (
                <>
                    <p>Queremos informarle que su solicitud ha sido recibida y actualmente se encuentra en proceso de revisión. Nuestro equipo de admisiones está evaluando cuidadosamente todos los aspectos de su perfil y documentación presentada para asegurar una consideración completa y justa.</p>
                    <p>Este proceso puede tomar algún tiempo, ya que nos esforzamos por realizar una evaluación exhaustiva de cada solicitante. Le notificaremos tan pronto como se haya tomado una decisión respecto a su admisión.</p>
                    <p>Mientras tanto, si tiene alguna pregunta o necesita actualizar cualquier información en su solicitud, no dude en contactarnos.</p>
                    <p>Agradecemos su paciencia y comprensión durante este proceso.</p>
                </>
            );
        }

        if (status === "admitido") {
            return (
                <>
                    <p>¡Nos complace darte la bienvenida a nuestra Institución!</p>
                    <p>Queremos felicitarle por este logro significativo. Su dedicación y esfuerzo han sido reconocidos, y estamos emocionados de darle la bienvenida a nuestra comunidad académica.</p>
                </>
            );
        }

        if (status === "No admitido") {
            return (
                <>
                    <p>Agradecemos el tiempo y esfuerzo que ha dedicado a su solicitud.</p>
                    <p>Lamentamos informarle que, después de una revisión exhaustiva y cuidadosa, su solicitud no ha sido admitida. La decisión se ha basado en una consideración completa de todos los aspectos de su perfil en comparación con otros solicitantes, y desafortunadamente, no hemos podido ofrecerle un lugar en esta ocasión.</p>
                    <p>Queremos expresar nuestro agradecimiento por su interés y alentarle a seguir adelante con sus planes académicos y profesionales. Valoramos mucho su esfuerzo y dedicación, y esperamos que continúe persiguiendo sus objetivos con determinación y éxito.</p>
                    <p>Si tiene alguna pregunta o necesita más información, no dude en contactarnos.</p>
                    <p>Le deseamos lo mejor en sus futuros proyectos.</p>
                </>
            );
        }

        return null;
    };

    return (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Estado de solicitud
                        </ModalHeader>
                        <ModalBody>
                            <section className="text-gray-500 space-y-10">
                                <span>
                                    <p>Solicitud por el número de identidad: {numberDocument}.</p>
                                    {notFound ? (
                                        <p>No encontrada.</p>
                                    ) : (
                                        status && (
                                            <>
                                                <p className="font-medium mb-5">Se encuentra en estado "{status}"</p>
                                                {renderStatusContent()}
                                            </>
                                        )
                                    )}
                                </span>
                            </section>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalComponer;