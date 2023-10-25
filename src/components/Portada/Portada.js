import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

import productosList from "../../constans/constantesclasif.json";
import { API, graphqlOperation } from "aws-amplify";
import { listINVENTARIOS } from "@/graphql/queries";
import Link from "next/link";
const Portada = ({ setShowResponse, setRespuesta }) => {
  const api = "http://localhost:5001/botapi";
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [messageUserNow, setMessageUserNow] = useState("");
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
            filter: { _deleted: { ne: true } },
            limit: 1000, // Establece la cantidad de elementos por página según tus necesidades
            nextToken: nextToken, // Pasa el token de próxima página si está disponible
          })
        );
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
  }, []); // Agrega nextToken como dependencia para que se ejecute cuando cambie
  console.log(medicamentos);
  const router = useRouter();
  const redirectToSearch = (categorias) => {
    // Navegar a la página de búsqueda con los parámetros necesarios
    router.push(`/search?categorias=${categorias}`);
  };
  const filtrar_medicinas = (data) => {
    const result = medicamentos.filter((item) => {
      return item.nombreProducto.toLowerCase().includes(data.toLowerCase());
    });
    console.log(result);
    setFilteredData(result);
  };

  const llenarMensaje = (e) => {
    // console.log(e.target.value);
    setMessageUserNow(e.target.value);
    filtrar_medicinas(e.target.value);
  };
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

  return (
    <div className="py-[80px] min-h-[100vh] bg-[#e1f9ff] flex flex-wrap md:flex-nowrap items-center gap-4 justify-between w-full px-4 ">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-[#0097bd] text-center max-w-[600px] mx-auto">
          La farmacia digital de México
        </h1>
        <p className="text-sm text-center leading-6 text-gray-500 max-w-[600px] mx-auto">
          Nuestra misión es encontrarte el medicamento que necesitas sabiendo
          que las farmacias tradicionales no lo tienen y llevártelo a tu
          domicilio.
        </p>
        <div
          className="relative w-full max-w-[800px] mx-auto mt-4"
          style={{
            boxShadow:
              "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
          }}
        >
          <input
            value={messageUserNow}
            onChange={llenarMensaje}
            type="text"
            placeholder="Escribe el nombre del producto o tu malestar"
            className="py-5 px-3 rounded-lg bg-white text-gray-500 font-bold w-full focus:outline-none"
          />
          <div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center">
              <div>
                <div className="relative right-[12px]">
                  <button
                    style={{ boxShadow: "0 4px 16px -8px #b0ba00" }}
                    onClick={() => enviarMensajes()}
                    className="cursor-pointer p-3 rounded-lg bg-[#b0ba00] flex items-center justify-center"
                  >
                    {loadingResponse ? (
                      <MdSearch className="text-white text-[20px] font-bold" />
                    ) : (
                      <div role="status items-center justify-center flex w-full">
                        <svg
                          aria-hidden="true"
                          className=" h-full w-[20px] mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-[#d7df4a]"
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
            <ul className="w-full list-none max-h-[250px] overflow-auto">
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
                    onClick={() => setMessageUserNow(messageUserNow)}
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
        <div className="grid gap-3 lg:grid-cols-4 grid-cols-2 mt-6">
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Medicamentos.b568b353.jpg"
                alt="Medicamentos"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Medicamentos
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Cardiologia.90bdfe2b.jpg"
                alt="cardiologia"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Cardiología
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Diabetes.ffd26115.jpg"
                alt="diabetes"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Diabetes
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Hipertension.353c4f88.jpg"
                alt="hipertension"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Hipertensión
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portada;
