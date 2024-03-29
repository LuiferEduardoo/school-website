import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Password from "./Password";
import ModalContainer from './Modal'
import { Button, useDisclosure } from "@nextui-org/react";
import { changePassword } from "../../../../services/auth.service";
import { toast } from "sonner";

const Form = () => {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState({error: false, message: ''});
  const [repeatPasswordError, setRepeatPasswordError] = useState({error: false, message: ''});
  const [isLoading, setIsLoading] = useState(false);

  const {isOpen, onOpen, onClose} = useDisclosure();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/login"); // Utiliza la función navigate aquí
    }
  }, [token, navigate]);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try{
      await changePassword({
        token,
        newPassword
      });
      onOpen();
      setNewPassword('');
      setRepeatPassword('')
    } catch(error){
      toast.error('Token invalido, solicite uno nuevo')
    }
    setIsLoading(false)
  };
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.{8,})\S+$/;
    return passwordRegex.test(password);
  };

  const validateIfThePasswordIsRepeated = (value, passwordTovalidate) => {
    setRepeatPasswordError({
      error: passwordTovalidate !== value,
      message: passwordTovalidate === value ? "" : "Las contraseñas no coinciden."
    }); // Realiza la validación de repetición de contraseña aquí
  }

  const handleNewPasswordChange = (value) => {
    setNewPassword(value);
    setNewPasswordError({
      error: !validatePassword(value),
      message: validatePassword(value)
      ? ""
      : "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
    });
    validateIfThePasswordIsRepeated(value, repeatPassword)
  };

  const handleRepeatPasswordChange = (value) => {
    setRepeatPassword(value);
    validateIfThePasswordIsRepeated(value, newPassword)
  };

  const isFormValid =
    newPassword.trim() !== "" &&
    repeatPassword.trim() !== "" &&
    newPassword === repeatPassword &&
    !newPasswordError.error &&
    !repeatPasswordError.error;

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleChangePassword}>
        <Password 
          label='Nueva contraseña'
          value={newPassword}
          handlePassword={handleNewPasswordChange}
          passwordError={newPasswordError}
        />
        <Password 
          label='Repita la nueva contraseña'
          value={repeatPassword}
          handlePassword={handleRepeatPasswordChange}
          passwordError={repeatPasswordError}
        />
        <div>
          <Button
            type="submit"
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
              isFormValid
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            isLoading={isLoading}
            disabled={!isFormValid}
          >
            Cambiar contraseña
          </Button>
        </div>
      </form>
      <ModalContainer 
        isOpen={isOpen} 
        onClose={onClose}
      />
    </>
  );
};

export default Form