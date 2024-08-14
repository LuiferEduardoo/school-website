import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ModalContainer = (props) => {
  const navigate = useNavigate();
  return (
    <Modal size="xl" isOpen={props.isOpen} onClose={props.onClose} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className='flex flex-col items-center justify-center mb-5'>
                <img src='/assets/check-icon.webp'></img>
                <h1 className='text-2xl font-bold text-center mb-4'>¡Has cambiado tu contraseña con exito!</h1>
                <span className='text-sm text-gray-500'>Ahora puedes volver a ingresar al sistema.</span>
              </div>
              <Button color="primary" onPress={() => {navigate("/auth/login")}} className='mb-5'>
                Iniciar sesión
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
