// pages/search/Search.js
"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    // Obtén los parámetros GET de la URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    // Ahora puedes utilizar los valores de categorias y productos
    const category = params.categorias.split(",");
    const product = params.productos.split(",");
    setCategorias(category);
    setProductos(product);

    console.log("Categorías:", category);
    console.log("Productos:", product);

    // Aquí puedes realizar cualquier lógica adicional con estos parámetros
  }, []);
  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      <div>
        <p>Categorías: </p>
        <ul>
          {categorias.map((c, index) => {
            return <li key={index}>{c}</li>;
          })}
        </ul>
        <p>Productos: </p>
        <ul>
          {productos.map((p, index) => {
            return <li key={index}>{p}</li>;
          })}
        </ul>
      </div>
      {/* ... Renderizado de resultados ... */}
    </div>
  );
}
