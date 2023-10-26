"use client";
import React, { useContext, useEffect, useState } from "react";
import pro from "../../constans/productos.json";
import { useCarrito } from "@/contexts/CarritoContext";
import { API, graphqlOperation } from "aws-amplify";
import { listINVENTARIOS } from "@/graphql/queries";
const ProductList = () => {
  // ------estados y contextos-------------
  const { carrito, addItemToCart, incrementItemInCart, decrementItemInCart } =
    useCarrito();

  // Obtener los productos de la página actual utilizando slice
  const [medicamentos, setMedicamentos] = useState([]);

  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y final para los productos de la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = medicamentos.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(pro.products.length / productsPerPage);

  // Calcular los botones de página que se mostrarán
  const visiblePages = [];
  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    visiblePages.push(i);
  }

  // ------FUNCIONES-------------
  // funcion si un producto ya esta en el carrito
  const isInCart = (id) => {
    const veri = carrito.filter((item) => item.id === id).length > 0;
    return veri;
  };

  // funcion PARA CAMBIAR DE PAGINACION
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // funcion PARA OBTENER MEDICAMENTOS
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
  useEffect(() => {
    fetchMedicamentos();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-5xl lg:py-12 py-24">
        <h2 className="text-xl text-start font-bold tracking-tight text-gray-700">
          Lo mas buscado
        </h2>

        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 rounded-lg">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white ease-in p-3 rounded-sm overflow-hidden"
            >
              <a href={product.url}>
                <div key={product.id} className="group relative p-6">
                  <div className="flex items-center justify-center w-full overflow-hidden rounded-md bg-white  lg:h-[200px]">
                    <img
                      src={product?.images?.[1]?.url}
                      alt={product.name}
                      className="scale-100 transition-transform duration-300 hover:scale-105 h-[192px] object-contain object-center lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="overflow-hidden">
                      <h3 className="text-sm text-gray-600 font-medium">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-[12px] overflow-hidden text-gray-400 text-ellipsis w-full whitespace-nowrap">
                        {product.additionalDescription}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      {product.priceValue}
                    </p>
                  </div>
                </div>
              </a>
              <form className="w-full">
                {!isInCart(product.id) ? (
                  <button
                    type="button"
                    className="bg-[#00a4cb] w-full rounded-full py-3 px-3 flex items-center duration-100 justify-between hover:bg-[#077996]  text-white"
                    onClick={() => addItemToCart(product)}
                  >
                    <span></span>
                    <span className="text-sm">Agregar al carrito</span>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <div className="block w-full px-4 py-2 text-sm font-medium transition hover:scale-105">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className="text-gray-500 border border-current rounded-full w-7 h-7 flex items-center justify-center"
                        onClick={() => decrementItemInCart(product.id)}
                      >
                        <span className="sr-only">Decrement</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="text-gray-500 text-md">
                        {
                          carrito.find((item) => item.id === product.id)
                            .quantity
                        }
                      </span>
                      <button
                        type="button"
                        className="text-gray-500 border border-current rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => incrementItemInCart(product.id)}
                      >
                        <span className="sr-only">Increment</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ))}
        </div>
        {/* Paginador */}
        <div className="mt-6 flex justify-end">
          <nav className="space-x-2">
            {/* Botón anterior */}
            {currentPage > 1 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 text-sm py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-indigo-200"
              >
                Anterior
              </button>
            )}

            {/* Botones de página visibles */}
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === page
                    ? "bg-[#9ca500] text-white text-sm"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-200 text-sm"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Botón siguiente */}
            {currentPage < totalPages && (
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 text-sm py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-indigo-200"
              >
                Siguiente
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
