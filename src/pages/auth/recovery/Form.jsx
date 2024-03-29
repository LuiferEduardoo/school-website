import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { recovery } from "../../../services/auth.service";
import { toast } from "sonner";

const Form = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            setIsCounting(false);
            return prevCounter;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  const handleRecovery = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const recoveryResponse = await recovery({
        email,
      });
      toast.success(recoveryResponse);
      setIsCounting(true);
      setCounter(120);
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  const validarEmail = (email) => {
    // Expresión regular para validar el formato básico del correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmail = (value) => {
    setEmail(value);
    setEmailError(!validarEmail(value));
  };

  let isFormValid =
    email.trim() !== "" && !emailError && (!isCounting || counter <= 0);
  return (
    <form className="mt-8 space-y-6" onSubmit={handleRecovery}>
      <Input
        value={email}
        onChange={(e) => handleEmail(e.target.value)}
        isInvalid={emailError}
        type="email"
        variant="bordered"
        placeholder="Correo electrónico"
        errorMessage={emailError && `Ingrese un correo electrónico válido`}
      />
      <Button
        type="submit"
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
          isFormValid
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
        isLoading={isLoading}
      >
        {isCounting
          ? `Recuperar contraseña (${counter}s)`
          : "Recuperar contraseña"}
      </Button>
      <div className="flex items-center justify-center">
        <div className="text-sm">
          <a
            href="login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Volver
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;