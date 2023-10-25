"use client";
import { Fragment, React, useContext, useEffect, useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import logo from "../../../public/logopharmahogar.png";
import Image from "next/image";
import SideBar from "../SideBar";
import CartDrawer from "../CartDrawer";
import GlobalContext from "@/contexts/GlobalContext";

import { FiChevronDown } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { listINVENTARIOS } from "@/graphql/queries";
import { API, Auth, graphqlOperation } from "aws-amplify";
import ModalLogin from "../Login/ModalLogin";
import { useAuthContext } from "@/contexts/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useCarrito } from "@/contexts/CarritoContext";
const Header = () => {
  const authContext = useAuthContext();
  console.log(authContext);
  const api = "http://localhost:5001/botapi";
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [messageUserNow, setMessageUserNow] = useState("");
  const { carrito } = useCarrito();
  const [messageHistorial, setMessageHistorial] = useState([
    // {
    //   role: "system",
    //   content:
    //     "Eres un asistente virtual, eres un doctor que el fin objetivo es que recetes un medicamento, puedes preguntar siempre para llegar al fondo del problema de un paciente que te escribe y tu corriges su escritura con : quisiste decir.",
    // },
    // 3 roles
    // system para definir que va a hacer o como actuara
    // user es lo que escribe el usuario product o discomfort
    // assistant que es lo que responde
  ]);
  const [medicamentos, setMedicamentos] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nextToken, setNextToken] = useState(null);

  const fetchMedicamentos = async () => {
    try {
      let nextToken = null;
      do {
        const result = await API.graphql(
          graphqlOperation(listINVENTARIOS, {
            // filter: { _deleted: { ne: true } },
            limit: 1000, // Establece la cantidad de elementos por página según tus necesidades
            nextToken: nextToken, // Pasa el token de próxima página si está disponible
          })
        );
        console.log(result);
        const data = result?.data?.listINVENTARIOS?.items || [];
        setMedicamentos((prevMedicamentos) => [...prevMedicamentos, ...data]);
        nextToken = result?.data?.listINVENTARIOS?.nextToken;
      } while (nextToken);
    } catch (error) {
      console.error("Error al obtener medicamentos:", error);
    }
  };
  const filtrar_medicinas = (data) => {
    const result = medicamentos.filter((item) => {
      return item.nombreProducto.toLowerCase().includes(data.toLowerCase());
    });
    console.log(result);
    setFilteredData(result);
  };
  // flujos search
  const flujoMedicamento = async (keywords) => {
    const newMensaje = {
      role: "user",
      // content: `Dime la intención del usuario en esta consulta: ${messageUserNow} dandome una respuesta solo en formato JSON, sin detallar. el json debe incluir el tipo: 'malestar', 'sentirse_bien', 'medicamento', 'no_entiende', y la descripción: que contendrá palabras clave separadas por comas.`,
      content: `El usuario escribe ${keywords}; esto puede ser una sustancia activa o nombre de uno o varios medicamentos, ¿Cuáles son los medicamentos relacionados segun esta solicitud? la respuesta debe darse en formato json de la siguiente manera: {"medicamentos": aqui va lo que ha escrito el usuario y/o los que tu has relacionado, "categorias": aqui pon categorias segun lo que hacen esos medicamentos separados por coma todo dentro de "" comillas dobles}`,
    };
    // Utiliza la función de actualización del estado para garantizar que obtienes el estado más actual
    setMessageHistorial((prevHistorial) => [...prevHistorial, newMensaje]);

    const messages = { messages: [...messageHistorial, newMensaje] }; // Define el objeto con la propiedad 'messages'
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messages), //[{},{}]...
    });

    const data = await response.json();
    console.log(data);
    const respuesta = JSON.parse(data.response);
    redirectToSearch(respuesta.categorias, respuesta.medicamentos);
  };
  const flujoMalestar = async (keywords) => {
    const newMensaje = {
      role: "user",
      // content: `Dime la intención del usuario en esta consulta: ${messageUserNow} dandome una respuesta solo en formato JSON, sin detallar. el json debe incluir el tipo: 'malestar', 'sentirse_bien', 'medicamento', 'no_entiende', y la descripción: que contendrá palabras clave separadas por comas.`,
      content: `El usuario escribe ${keywords}; esto es una secuencia de palabras clave donde existe uno o varios malestares, devuelve en formato json, las categorias que podrian estar relacionadas con este json
      {
        "Supervisión médica": [],
        "Nariz y oídos": [],
        "Dolor": [
          "Musculares y desinflamatorios",
          "Analgésicos",
          "Anestésicos",
          "Hemorroides",
          "Analgésicos Infantil",
          "Cólicos"
        ],
        "Estomacal": [
          "Antiulcerosos",
          "Parásitos",
          "Dolor y malestar",
          "Antiácidos",
          "Reductores de peso",
          "Laxantes",
          "Digestivos",
          "Sueros orales",
          "Antidiarréicos"
        ],
        "Oftálmicos": [
          "Lágrimas artificiales",
          "Toallitas húmedas oftálmicas",
          "Higiene lentes de contacto",
          "Oftalmológicos",
          "Lubricantes oculares",
          "Lentes de Contacto"
        ],
        "Dermatológicos": [
          "Tratamientos dermatológicos",
          "Dermatitis",
          "Gel dermatológico",
          "Tratamientos antiacné",
          "Cicatrizantes",
          "Capilares"
        ],
        "Gripe y tos": [
          "Tos",
          "Descongestionantes",
          "Antigripales",
          "Garganta Irritada",
          "Antialérgicas",
          "Nebulizadores",
          "Inhaladores"
        ],
        "Relajantes": ["Relajantes"],
        "Antimicóticos": [
          "Polvos y talcos",
          "Soluciones",
          "Tabletas",
          "Geles",
          "Aerosoles"
        ],
        "Genéricos": [],
        "Tratamientos": ["Sistema Circulatorio"],
        "Especialidades médicas": [],
        "Corporal": ["Cuidado de Uñas"],
        "Várices": ["Cuidado de piernas"]
      }, en donde cada una se encuentran los atributos que son las categorias y adentro de cada una es un array de las subcategorias que tienen. tu deber es relacionar adecuadamente esas palabras clave con ese json y devolverme en un formato json lo siguiente      
      : { "categorias": [aqui pon las categorias que encontraste separados por coma todo dentro de "" comillas dobles, solo considerar las categorias como tal, no subcategorias y estas deben tener un orden de relacion de mayor relacion o parecido a menor relacion, segun tu criterio]}`,
    };
    // Utiliza la función de actualización del estado para garantizar que obtienes el estado más actual
    setMessageHistorial((prevHistorial) => [...prevHistorial, newMensaje]);

    const messages = { messages: [...messageHistorial, newMensaje] }; // Define el objeto con la propiedad 'messages'
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messages), //[{},{}]...
    });

    const data = await response.json();
    console.log(data);
    const respuesta = JSON.parse(data.response);
    redirectToSearch(respuesta.categorias);
  };
  const enviarMensajes = async () => {
    try {
      // flujoInterpretar();
      setLoadingResponse(false);
      const newMensaje = {
        role: "user",
        content: `Dime la intención del usuario en esta consulta: ${messageUserNow} y dame una respuesta de cualquiera de estos 3 tipos: ‘malestar’, cuando describa o presente algún malestar por ejemplo si el escribe algo como esto: "tengo dolor de, medicamento para, me duele mucho, etc.", 'sentirse_bien', cuando exprese la necesidad de sentirse bien en algo o con respecto a su cuerpo, ‘medicamento’; cuando diga el nombre, sustancia activa y/o cantidad de uno o varios medicamentos en especial, ‘no_entiende’, cuando no entendiste su intención de lo que escribió. Solo puedes responder en formato json de esta manera
        {"intencion": 'malestar' o 'medicamento' o 'no_entiende', "keywords": donde guardaras palabras claves separadas por comas de la consulta que se te ha dado}`,
        // content: `Dime la intención del usuario en esta consulta: ${messageUserNow}  y dame una respuesta de cualquiera de estos 3 tipos: ‘malestar’, cuando describa o presente algun malestar por ejemplo: "tengo dolor de, medicamento para, me duele mucho, etc,",'sentirse_bien', cuando exprese la necesidad de sentirse bien en algo o con respecto a su cuerpo, ‘medicamento’; cuando diga el nombre, sustancia activa y/o cantidad de uno o varios medicamentos en especial, como referencia toma los productos de todo MXN", ‘no_entiende’, cuando no entendiste su intencion de lo que escribió. Solo puedes responder en formato json de esta manera
        // {"intencion": 'malestar' o 'medicamento' o 'no_entiende', "keywords": donde guardaras palabras claves separadas por comas}`,
      };
      // Utiliza la función de actualización del estado para garantizar que obtienes el estado más actual
      // setMessageHistorial((prevHistorial) => [...prevHistorial, newMensaje]);

      const messages = { messages: [newMensaje] }; // Define el objeto con la propiedad 'messages'

      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages), //[{},{}]...
      });

      const data = await response.json();
      // console.log(data);
      // console.log(JSON.parse(data.response));
      const respuesta = JSON.parse(data.response);
      switch (respuesta.intencion) {
        case "medicamento":
          flujoMedicamento(respuesta.keywords);
          break;
        case "malestar":
          flujoMalestar(respuesta.keywords);
          break;
        default:
          break;
      }

      setLoadingResponse(true);
      // const newMensajeAsistan = { role: "assistant", content: data.response };

      // setMessageHistorial([...messageHistorial, newMensajeAsistan]);
      setRespuesta(data.response);
      setShowResponse(true);
      setMessageUserNow("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // fin de flujos search
  const llenarMensaje = (e) => {
    // console.log(e.target.value);
    setMessageUserNow(e.target.value);
    filtrar_medicinas(e.target.value);
  };

  useEffect(() => {
    fetchMedicamentos();
  }, []);
  // filtering
  const { globals, setGlobals } = useContext(GlobalContext);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // evento de scroll para header
  const [scrollingDown, setScrollingDown] = useState(false);
  // const [scrolledDown, setScrolledDown] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // useEffect(() => {
  //   let prevScrollY = window.scrollY;
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     console.log(prevScrollY);
  //     console.log(scrollY);
  //     if (scrollY > prevScrollY) {
  //       setScrolledDown(true);
  //     } else {
  //       setScrolledDown(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrolledDown]);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos && !scrollingDown) {
        // Scroll hacia abajo
        setScrollingDown(true);
        // document.getElementById('miDiv').classList.add('nuevaClase');
      } else if (currentScrollPos < prevScrollPos && scrollingDown) {
        // Scroll hacia arriba
        setScrollingDown(false);
        // document.getElementById('miDiv').classList.remove('nuevaClase');
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  const scrollHeader = scrollingDown ? "scroll-header" : "";

  // auth next
  // const { data: session } = useSession();
  // console.log(session);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );
  const [loadingLogin, setLoadingLogin] = useState(false);
  const autenticacionLogin = () => {
    setLoadingLogin(true);
  };
  const router = useRouter();
  const handleSession = async () => {
    await Auth.signOut();
    authContext.fetchUser();
  };

  // fin de evento de scroll para header
  return (
    <>
      <ModalLogin loading={loadingLogin} setLoading={setLoadingLogin} />

      <SideBar />
      <div className="h-[160px] relative">
        <header
          aria-label="Site Header"
          className="bg-white fixed z-20 top-0 left-0 right-0 border-b border-gray-10 shadow-md"
        >
          <div
            className={`cinta-navbar h-[20px] bg-[#cad304] ${scrollHeader}`}
          ></div>
          <div
            className={`cinta-navbar h-[35px] bg-[#01a4c6] ${scrollHeader}`}
          ></div>
          <div className="mx-auto  flex h-16 max-w-5xl items-center justify-end sm:px-6 lg:px-0">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="p-2 lg:hidden"
                onClick={() => {
                  setGlobals({
                    ...globals,
                    openSideBar: true,
                    openCartDrawer: false,
                  });
                }}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Link href="/" className="p-1.5 flex">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-10 w-auto"
                  src={logo}
                  alt="logo pharmahogar"
                />
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-between gap-8">
              {/* <nav
              aria-label="Site Nav"
              className="hidden lg:justify-center w-full lg:flex lg:gap-4 lg:text-sm lg:font-medium  lg:tracking-wide lg:text-gray-700"
            >
              <Link
                href="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Sobre Nosotros
              </Link>

              <Link
                href="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Ofertas y Promociones
              </Link>
              <Link
                href="/products"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Productos
              </Link>
              <Link
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Contacto
              </Link>
            </nav> */}
              <div
                className="relative rounded-sm overflow-hidden w-full max-w-[462px] h-[43px] mx-auto"
                // style={{
                //   boxShadow:
                //     "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
                // }}
              >
                <input
                  value={messageUserNow}
                  onChange={llenarMensaje}
                  type="text"
                  placeholder="Escribe el nombre del producto o tu malestar"
                  className="h-full text-[12px] px-3 bg-[#f5f6f9] text-gray-500 w-full focus:outline-none"
                />
                <div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center">
                    <div>
                      <div className="relative right-0">
                        <button
                          style={{ boxShadow: "0 4px 16px -8px #009dc6" }}
                          onClick={() => enviarMensajes()}
                          className="cursor-pointer p-3 bg-[#00a4cb] flex items-center justify-center"
                        >
                          {loadingResponse ? (
                            <MdSearch className="text-white text-[20px] font-bold" />
                          ) : (
                            <div role="status items-center justify-center flex w-full">
                              <svg
                                aria-hidden="true"
                                className=" h-full w-[20px] mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-[#cad304]"
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
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    messageUserNow === ""
                      ? "absolute top-full mt-2 left-0 right-0 z-[1500] bg-white p-2 hidden"
                      : "absolute top-full mt-2 left-0 right-0 z-[1500] bg-white p-2"
                  }
                  style={{
                    boxShadow:
                      "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
                  }}
                >
                  <span className="text-[10px] font-bold">
                    Productos relacionados
                  </span>
                  <ul className="w-full list-none max-h-[200px] overflow-auto">
                    {filteredData.length > 0 &&
                      filteredData.map((m, index) => {
                        return (
                          <Link href={`/productos/${m.id}`}>
                            <li
                              // onClick={() => setMessageUserNow(m.nombreProducto)}
                              key={index}
                              className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-400 ease-in duration-100 hover:text-white"
                            >
                              <img
                                className="w-[50px] h-[50px] object-cover"
                                src={m?.urlImagen}
                                alt=""
                              />
                              <div>
                                <p className="text-sm text-inherit">
                                  {m.nombreProducto + ", "}
                                </p>
                                {/* <p className="text-sm text-gray-700 font-bold">
                          {"Cateogoria: " +
                            m.gtmProperties.subcategory +
                            ", sub: " +
                            m.gtmProperties.division}
                        </p> */}
                              </div>
                            </li>
                          </Link>
                        );
                      })}
                    {filteredData.length === 0 ? (
                      <>
                        <span className="text-[10px] font-bold">
                          Buscar esta sugerencia
                        </span>
                        <li
                          // onClick={() => setMessageUserNow(messageUserNow)}
                          className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-400 ease-in duration-100 hover:text-white"
                        >
                          {messageUserNow}
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="">
                    <button
                      onClick={() =>
                        setGlobals({ ...globals, openCartDrawer: true })
                      }
                      className="relative hover:cursor-pointer grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-gray-700"
                    >
                      <div>
                        <svg
                          className="relative h-5 w-5 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <span className="p-1 bg-[#b0ba00] text-white rounded-full h-6 w-6 text-center text-xs leading-4 absolute top-3 right-1">
                          {carrito.length}
                        </span>
                      </div>
                      <span className="sr-only">Cart</span>
                    </button>
                  </span>

                  <span className="">
                    {authContext?.userName ? (
                      <>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-4 py-2 overflow-hidden">
                                <p className="text-sm">Bienvenido</p>
                                <p className="text-sm text overflow-hidden font-medium text-ellipsis whitespace-nowrap w-full">
                                  {authContext.authEmail}
                                </p>
                              </div>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Tu perfil
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Ver carrito
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={handleSession}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                                    )}
                                  >
                                    Cerrar Sesión
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    ) : (
                      <button
                        onClick={autenticacionLogin}
                        className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-gray-700"
                      >
                        <svg
                          className="h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>

                        <span className="sr-only"> Iniciar sesion </span>
                      </button>
                      // <Link
                      //   href="/account"
                      //   className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-gray-700"
                      // >
                      //   <svg
                      //     className="h-5 w-5 text-[#0097bd]"
                      //     xmlns="http://www.w3.org/2000/svg"
                      //     fill="none"
                      //     viewBox="0 0 24 24"
                      //     stroke="currentColor"
                      //   >
                      //     <path
                      //       strokeLinecap="round"
                      //       strokeLinejoin="round"
                      //       strokeWidth="2"
                      //       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      //     />
                      //   </svg>

                      //   <span className="sr-only"> Account </span>
                      // </Link>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`cinta-navbar h-[40px]  ${scrollHeader}`}>
            <div className="max-w-5xl mx-auto flex justify-between">
              <div className="w-[400px] flex items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">
                  Categorias
                </span>
                <FiChevronDown />
              </div>
              <ul className="w-full flex items-center justify-between gap-3">
                <li>
                  <a className="text-xs text-gray-600 font-medium" href="#">
                    Categoria 1
                  </a>
                </li>
                <li>
                  <a className="text-xs text-gray-600 font-medium" href="#">
                    Categoria 2
                  </a>
                </li>
                <li>
                  <a className="text-xs text-gray-600 font-medium" href="#">
                    Categoria 3
                  </a>
                </li>
                <li>
                  <a className="text-xs text-gray-600 font-medium" href="#">
                    Categoria 4
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 font-medium" href="#">
                    Categoria 5
                  </a>
                </li>
                <li>
                  <a className="text-xs text-gray-600 font-medium" href="#">
                    Categoria 6
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CartDrawer />
        </header>
      </div>
    </>
  );
};

export default Header;
