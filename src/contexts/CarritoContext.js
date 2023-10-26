import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const addItemToCart = (product) => {
    product.quantity = 1;
    const newProducto = {
      id: product.id,
      description: product?.additionalDescription,
      quantity: 1,
      title: product?.name,
      image: product?.images?.[1]?.url,
      price: product.priceValue,
      total: product.priceValue,
    };
    const newCarrito = [...carrito, newProducto];
    // console.log(newProducto);
    setCarrito(newCarrito);
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
  };

  const incrementItemInCart = (id) => {
    console.log(id);
    const newCarrito = carrito.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    console.log(newCarrito);
    setCarrito(newCarrito);

    localStorage.setItem("carrito", JSON.stringify(newCarrito));
  };
  const decrementItemInCart = (id) => {
    //if quantity is 1 remove item from cart
    if (carrito.find((item) => item.id === id).quantity === 1) {
      removeItemFromCart(id);
      return;
    }
    const newCarrito = carrito.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCarrito(newCarrito);

    localStorage.setItem("carrito", JSON.stringify(newCarrito));
  };
  const removeItemFromCart = (id) => {
    console.log(id);
    const newCarrito = carrito.filter((item) => item.id !== id);

    setCarrito(newCarrito);
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addItemToCart,
        incrementItemInCart,
        decrementItemInCart,
        removeItemFromCart,
        limpiarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
