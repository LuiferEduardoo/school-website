import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthContext";
import { toast } from "sonner";
import { login } from "../../../services/auth.service";
import {
  getTokenCookie,
  setTokenCookie,
} from "../../../services/AuthService.service";
import { Input, Button } from "@nextui-org/react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const Form = () => {
  const { refreshToken, setRefreshToken, setAccessToken } =
    useContext(AuthContext);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();

  useEffect(() => {
    if (refreshToken) {
      navigate("/administration-panel");
    }
  }, [refreshToken, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const loginResponse = await login({
        credential,
        password,
      });
      setTokenCookie(
        "access_token",
        loginResponse.tokenAccess.token,
        loginResponse.tokenAccess.expiresIn
      );
      setTokenCookie(
        "refresh_token",
        loginResponse.tokenRefresh.token,
        loginResponse.tokenRefresh.expiresIn
      );

      setAccessToken(getTokenCookie("access_token"));
      setRefreshToken(getTokenCookie("refresh_token"));
      setAuthenticated(true);
    } catch (error) {
      toast.error(error.message);
      setAuthenticated(false);
    }
    setIsLoading(false);
  };

  const isFormValid = credential.trim() !== "" && password.trim() !== "";
  return (
    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
      <div className="rounded-md shadow-sm flex flex-col gap-4">
        <Input
          isClearable
          type="text"
          label="Email"
          value={credential}
          onValueChange={setCredential}
          variant="bordered"
        />
        <Input
          label="Contraseña"
          variant="bordered"
          value={password}
          onValueChange={setPassword}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEyeSharp className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
      </div>
      <Button
        type="submit"
        isDisabled={!isFormValid}
        isLoading={isLoading}
        color="primary"
        size="lg"
        className="w-full"
      >
        Entrar
      </Button>
      <div className="text-center">
        <Link to="/auth/recovery" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </form>
  );
};

export default Form;