import { useAuthContext } from "@/contexts/AuthContext";
import { Dialog } from "@headlessui/react";
import { Auth } from "aws-amplify";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FiUserX, FiX } from "react-icons/fi";

const MechanimsLogin = ({ setLoading }) => {
  const [correoLoading, setCorreoLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const authContext = useAuthContext();
  const handleLogin = async () => {
    try {
      setLoadingLogin(true);
      console.log(username, password);
      const user = await Auth.signIn(username, password);

      //   setUser(user);
      authContext.fetchUser();
      setLoading(false);
      setLoadingLogin(false);
      // Puedes realizar redirecciones aquí si es necesario.
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };
  // registrarse funcion
  const registrarse = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 divide-y-2">
      <div className="sm:flex sm:items-center">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <FiUserX className="h-6 w-6 text-gray-800" aria-hidden="true" />
        </div>
        <div className="mt-3 flex items-center justify-between w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Iniciar Sesion
          </Dialog.Title>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={() => setLoading(false)}
          >
            <FiX />
          </button>
        </div>
      </div>
      <div className="border-[#ececec] py-4">
        <div className="w-full mt-4 flex flex-col gap-3">
          {/* <button className="border-gray-500 min-h-[60px] border-2 rounded-full w-full px-4 py-1 flex items-center justify-center gap-4">
            <img
              className="h-[35px]"
              src="/icons/facebook.svg"
              alt="icon-facebook"
            />
            <h3 className="text-sm font-medium">Iniciar sesión con Facebook</h3>
          </button> */}
          <button
            onClick={() => signIn("google")}
            className="border-gray-500 min-h-[60px] border-2 rounded-full w-full px-4 py-1 flex items-center justify-center gap-4"
          >
            <img
              className="h-[35px]"
              src="/icons/google.svg"
              alt="icon-facebook"
            />
            <h3 className="text-sm font-medium">Iniciar sesión con Google</h3>
          </button>
          <div className="w-full text-center">o</div>
          {/* <button className="border-gray-500 min-h-[60px] border-2 rounded-full w-full px-4 py-1 flex items-center justify-center gap-4">
            <img
              className="h-[35px]"
              src="/icons/apple.svg"
              alt="icon-facebook"
            />
            <h3 className="text-sm font-medium">Iniciar sesión con Apple</h3>
          </button> */}
          {correoLoading ? (
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="name@email.com"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0097bd] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0097bd] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-[#0097bd] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#008ebd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {loadingLogin ? (
                    <>
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </>
                  ) : (
                    "Ingresar"
                  )}
                </button>
              </div>
            </>
          ) : (
            <button
              //   onClick={() => signIn("credentials")}
              onClick={() => setCorreoLoading(true)}
              className="border-[#0097bd] min-h-[60px] border-2 rounded-full w-full px-4 py-1 flex items-center justify-center gap-4"
            >
              {/* <img
                        className="h-[35px]"
                        src="/icons/apple.svg"
                        alt="icon-facebook"
                      /> */}
              <h3 className="text-sm text-[#0097bd] font-medium">
                Iniciar sesión con correo electronico
              </h3>
            </button>
          )}

          <div className="w-full">
            <a
              href="#"
              className="block text-sm text-[#0097bd] text-center font-medium"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="w-full flex justify-center items-center gap-3">
            <p className="text-sm font-medium">¿Aún no tienes cuenta?</p>
            <a
              href="#"
              className="inline-block text-sm text-[#0097bd] text-center font-medium"
            >
              Regístrate
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="my-2">
          <a
            href="#"
            className="py-2 block text-sm text-[#0097bd] text-center font-medium"
          >
            Continuar sin iniciar sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default MechanimsLogin;
