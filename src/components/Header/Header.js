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
import { Auth } from "aws-amplify";
import ModalLogin from "../Login/ModalLogin";
import { useAuthContext } from "@/contexts/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useCarrito } from "@/contexts/CarritoContext";
import SearchChat from "../ChatApi/SearchChat";
const Header = () => {
  const authContext = useAuthContext();
  console.log(authContext);

  const { carrito } = useCarrito();
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
              <SearchChat />

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
