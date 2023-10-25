import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logopharmahogar.png";
const Footer = () => {
  return (
    <div className="bg-tertiary w-full text-primary p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y frase */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Logo Farmacia" width={100} height={100} />
          <p className="mt-4 text-center md:text-left">
            Frase acerca de tu farmacia.
          </p>
        </div>

        {/* Columna 2: Políticas y Preguntas Frecuentes */}
        <div>
          <h3 className="font-bold mb-4">Información</h3>
          <ul className="space-y-2">
            <li>
              <a href="/politicas" className="hover:text-C8D403">
                Políticas
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-C8D403">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Salud */}
        <div>
          <h3 className="font-bold mb-4">Salud</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog-salud" className="hover:text-C8D403">
                Blog de Salud
              </a>
            </li>
            <li>
              <a href="/marcas" className="hover:text-C8D403">
                Marcas con las que trabajamos
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-primary bgmd:mt-0 md:col-span-3 flex justify-between items-center p-2">
          <p className="text-tertiary ">
            &copy; {new Date().getFullYear()} Pharmahogar. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d2fji7bh9tddzf.cloudfront.net/wp-content/uploads/ic_facebook_footer.png"
                alt="Facebook"
                width="24"
                height="24"
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://d2fji7bh9tddzf.cloudfront.net/wp-content/uploads/ic_instagram.png"
                alt="Instagram"
                width="24"
                height="24"
              />
            </a>

            <a
              href="https://twitter.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-secondary"
              >
                <path
                  d="M23.954 4.569c-.885.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724a10.04 10.04 0 0 1-3.179 1.217 5.048 5.048 0 0 0-8.633 4.596A14.33 14.33 0 0 1 1.68 2.084a5.038 5.038 0 0 0 1.566 6.72A5.047 5.047 0 0 1 .8 7.713v.064a5.05 5.05 0 0 0 4.047 4.952 5.01 5.01 0 0 1-2.253.085 5.05 5.05 0 0 0 4.724 3.51A10.122 10.122 0 0 1 0 18.407a14.3 14.3 0 0 0 7.73 2.266c9.3 0 14.366-7.695 14.366-14.366 0-.219-.004-.438-.013-.654A10.273 10.273 0 0 0 24 3.773c-.892.395-1.85.663-2.847.795z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Sección de Copyright y Redes Sociales */}
    </div>
  );
};

export default Footer;
