import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import Link from "next/link";
import VisibilityOn from "components/Icons/VisibilityOn";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loginSchema } from "schemas/login";

/**
 * Componente de la página de incio de sesión
 * @returns {JSX} Login
 */
export default function Login() {
  /**
   * Use router para redireccionar a la página de la aplicación
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Estado de la contraseña
   * @type {boolean}
   * @default false
   * @description Estado de la contraseña
   */
  const [visible, setVisible] = useState(false);
  /**
   * Hooks de formulario de inicio de sesión
   * @type {Object}
   * @property {Object} register - Función para registrar los datos del formulario
   * @property {Object} handleSubmit - Función para enviar los datos del formulario
   */

  /**
   * Estado de error
   * @type {string}
   * @default null
   * @description Mensaje de error
   **/

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  /**
   * useEffect para enviar los datos del formulario
   * @param {Object} data - Datos del formulario
   * @returns {void}
   * @description Función para enviar los datos del formulario y redireccionar a la página de la aplicación
   */
  const onSubmit = (data) => {
    console.log(data);
    window
      .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((parsedData) => {
        console.log(parsedData);
        if (parsedData.error) {
          setError(parsedData.message);
        } else {
          window.localStorage.setItem("user", JSON.stringify(parsedData));
          router.push("/app");
        }
      })
      .catch((err) => console.error(err));
  };
  /**
   * useEffect para proteger rutas
   * @returns {void}
   * @description Función para evitar que el usuario entre por ruta "/app" sin estar registrados.
   */
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      router.push("/app");
    }
  }, []);

  console.log(error, "aea");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 2xl:px-48 bg-white pb-5 xl:pb-14 mt-16 mb-16 sm:mt-32 sm:mb-32 w-10/12 sm:max-w-lg lg:w-8/12 rounded-xl lg:rounded-none lg:m-0 xl:min-w-[38%]"
      >
        <div className="flex flex-row justify-center pr-4 mb-2 transition duration-500 ease-in-out cursor-pointer lg:mb-10 hover:scale-110">
          <Link href="/">
            <a>
              <Logo className="w-39 h-28 sm:w-56 sm:h-32" />
            </a>
          </Link>
        </div>
        <span className="mb-4 text-lg font-semibold sm:mb-8 lg:mb-10 md:text-2xl ">
          Inicia sesión
        </span>
        <TextInput
          label="Correo electrónico"
          type="text"
          name="correo"
          variant="primary"
          errors={errors.correo}
          register={register}
        />
        <div className="relative flex flex-col justify-center">
          <TextInput
            label="Contraseña"
            type={!visible ? "password" : "text"}
            name="contraseña"
            variant="primary"
            errors={errors.contraseña}
            register={register}
          />
          {!visible ? (
            <VisibilityOn
              className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <VisibilityOff
              className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <a
          href="/"
          className="mb-2 text-sm font-semibold text-green-600 underline cursor-pointer md:text-base sm:mb-5 lg:mb-8"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <Button type="submit" variant="quinary">
          Iniciar sesión
        </Button>
        <div className="my-2 text-sm font-semibold md:text-base lg:my-8 sm:my-5">
          <span className="text-gray-500">¿Aun no tienes una cuenta?{` `}</span>
          <a
            href="/register"
            className="font-semibold text-green-600 underline cursor-pointer"
          >
            Regístrate
          </a>
        </div>
        {error && (
          <span className="px-4 py-2 text-sm font-semibold text-center text-white bg-red-600 md:text-base">
            {error}
          </span>
        )}
      </form>
      <Sample />
    </>
  );
}
