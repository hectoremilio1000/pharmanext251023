import React from "react";
import { FaBus } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { IoIosCard } from "react-icons/io";
const Beneficios = () => {
  return (
    <div className="w-full bg-[#009dc6] py-[40px]">
      <div className="max-w-5xl  mx-auto grid grid-cols-3 gap-4 ">
        <div
          // style={{
          //   boxShadow:
          //     "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
          // }}
          className="w-full bg-white flex items-center justify-center flex-col gap-4 p-6 border-1 border-[#ececec] rounded-lg"
        >
          <FaBus className="text-[#0097bd] text-[30px]" />
          <p className="text-sm text-gray-600 font-bold text-center">
            Envíos <b className="text-[#b0ba00]"> GRATIS </b> a todo MEXICO
          </p>
        </div>
        <div
          // style={{
          //   boxShadow:
          //     "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
          // }}
          className="w-full bg-white flex items-center justify-center flex-col gap-4 p-6 border-1 border-[#ececec] rounded-lg"
        >
          <MdLocalOffer className="text-[#0097bd] text-[30px]" />
          <p className="text-sm text-gray-600 font-bold text-center">
            Descubre nuestro folleto de{" "}
            <b className="text-[#b0ba00]"> OFERTAS </b>
          </p>
        </div>
        <div
          // style={{
          //   boxShadow:
          //     "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
          // }}
          className="w-full bg-white flex items-center justify-center flex-col gap-4 p-6 border-1 border-[#ececec] rounded-lg"
        >
          <IoIosCard className="text-[#0097bd] text-[30px]" />
          <p className="text-sm text-gray-600 font-bold text-center">
            Activa membresía <b className="text-[#b0ba00]"> HOGAR PHARMA </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
