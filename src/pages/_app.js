import "@/styles/globals.css";
import GlobalContext from "@/contexts/GlobalContext";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import "@aws-amplify/ui-react/styles.css";
import AuthContextProvider from "@/contexts/AuthContext";
import { CarritoProvider } from "@/contexts/CarritoContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [globals, setGlobals] = useState({
    openCartDrawer: false,
    openSideBar: false,
  });
  return (
    <>
      <AuthContextProvider>
        <CarritoProvider>
          <GlobalContext.Provider value={{ globals, setGlobals }}>
            <Header />
          </GlobalContext.Provider>
          <Component {...pageProps} />
          <Footer />
        </CarritoProvider>
      </AuthContextProvider>
    </>
  );
}
