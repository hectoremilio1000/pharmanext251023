import ModalLogin from "@/components/Login/ModalLogin";
import { useCarrito } from "@/contexts/CarritoContext";
import GlobalContext from "@/contexts/GlobalContext";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaHome, FaMedkit } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

const Checkout = () => {
  const { carrito } = useCarrito();
  const [methodEntrega, setMethodEntrega] = useState("");
  const CartItemsList = () => {
    return carrito.map((product) => (
      <li className="flex py-6">
        <div className="h-20 w-20 p-3 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.image}
            alt="Clothes orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-800">
              <h3>
                <a className="text-sm" href="#">
                  {product.title}
                </a>
              </h3>
              <p className="ml-4">${product.price}.00</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
      </li>
    ));
  };
  const [loadingLogin, setLoadingLogin] = useState(false);
  const autenticacionLogin = () => {
    setLoadingLogin(true);
  };
  return (
    <div>
      <Head>
        <title>Carrito de Compras</title>

        <link rel="icon" href="/logopharmahogar.png" />
      </Head>
      <div className="pt-[20px] w-full">
        <ModalLogin loading={loadingLogin} setLoading={setLoadingLogin} />

        <div className="max-w-5xl py-4 mx-auto">
          <Link
            href={"/carrito"}
            className="text-[#01a4c6] text-xs font-medium flex items-center gap-3"
          >
            <FiChevronLeft />
            Volver al carrito
          </Link>
          <p className="text-sm text-gray-800 my-[20px] font-medium">
            ¡Ya falta poco para finalizar tu compra!
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
          <div className="w-full glex flex flex-col gap-6">
            {/* <div className="w-full h-[3rem]">
              <div className="flex relative  flex-items justify-center gap-4">
                <div className="flex items-center justify-center flex-col">
                  <div className="absolute bottom-0 left-[25%]">
                    <p className="text-[#0097bd] font-bold text-sm">Entrega</p>
                    <div className="w-[10px] h-[10px] bg-[#b0ba00] rounded-full"></div>
                  </div>
                </div>
              </div>
              <progress
                class="h-[0.5rem] w-full appearance-none"
                max="100"
                value="50"
              ></progress>
            </div> */}
            <div className="w-full py-4 px-6 rounded-xl bg-white">
              <h1 className="text-lg text-gray-800 font-medium pb-3 border-gray-300 border-b">
                Necesitamos algunos datos para continuar
              </h1>
              <p className="text-sm my-4">
                Estos datos no se guardarán para una próxima compra. Puedes
                continuar o{" "}
                <b
                  onClick={autenticacionLogin}
                  className="text-[#01a4c6] cursor-pointer"
                >
                  Iniciar Sesión
                </b>
                .
              </p>
              <div className="grid grid-cols-2 my-2 gap-3">
                <div className="w-full">
                  <label
                    for="nombres"
                    class="block mb-2 text-sm font-regular text-gray-800 dark:text-white"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="apellidos"
                    class="block mb-2 text-sm font-regular text-gray-800 dark:text-white"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Ingresa tus apellidos"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="apellidos"
                    class="block mb-2 text-sm font-regular text-gray-800 dark:text-white"
                  >
                    Celular/Whatsapp
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ej: 105526658"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="correo"
                    class="block mb-2 text-sm font-regular text-gray-800 dark:text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ej: job@email.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full py-4 px-6 rounded-xl bg-white">
              <h1 className="text-lg text-gray-800 font-medium pb-3 border-gray-300 border-b">
                ¿En dónde recibirás tu pedido?
              </h1>
              <div className="flex my-2 gap-3">
                <button
                  onClick={() => setMethodEntrega("domicilio")}
                  className={`${
                    methodEntrega === "domicilio"
                      ? "border-[#01a4c6] text-[#01a4c6]"
                      : "text-gray-700 border-gray-500"
                  } flex items-center gap-3 font-medium border-2 text-sm px-4 py-3 rounded`}
                >
                  <FaHome className="text-[25px]" />A domicilio
                </button>
                <button
                  onClick={() => setMethodEntrega("farmacia")}
                  className={`${
                    methodEntrega === "farmacia"
                      ? "border-[#01a4c6] text-[#01a4c6]"
                      : "text-gray-700 border-gray-500"
                  } flex items-center gap-3 font-medium border-2 text-sm px-4 py-3 rounded `}
                >
                  <FaMedkit className="text-[25px]" />
                  En Farmacia
                </button>
              </div>
            </div>
            <div className="w-full p-4 rounded-xl">
              <div className="flex justify-end my-2 gap-3">
                <button
                  onClick={() => setMethodEntrega("farmacia")}
                  className={`
                      "border-[#01a4c6] bg-[#01a4c6] text-[#fff] flex items-center gap-3 font-medium border-2 text-sm px-4 py-3 rounded-full `}
                >
                  Finalizar pedido
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl px-6 py-5">
            <h1 className="text-lg text-gray-800 font-medium border-b border-gray-300 pb-3">
              Resumen de pedido
            </h1>
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {<CartItemsList />}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
