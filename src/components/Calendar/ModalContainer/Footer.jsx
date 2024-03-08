import { Button } from "@nextui-org/react";

const Footer = (props) => {
  return (
    <>
      <Button color="danger" variant="light" onPress={props.onClose}>
        Cerrar
      </Button>
      {!props.isReadOnly && (
        <>
            {props.id && (
                <Button color="danger" variant="flat">
                    Borrar
                </Button>
            )}
            <Button
                color="primary"
                onPress={props.onClose}
                isDisabled={!props.title || !props.start || !props.end || props.error}
            >
                Guardar
            </Button> 
        </>
        )}
    </>
  );
};

export default Footer
