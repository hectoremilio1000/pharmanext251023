import React from "react";

const RespuestApi = ({ showResponse, respuesta }) => {
  return (
    <div
      className={
        showResponse
          ? `w-full bottom-0 fixed z-[2000] left-0 right-0`
          : "hidden w-full bottom-0 fixed z-[2000] left-0 right-0"
      }
    >
      <div className="max-w-5xl mx-auto bg-[#d7df4a] p-6 rounded-lg shadow-lg ">
        <h1 className="text-lg text-gray-900">Respuesta del Chat</h1>
        <p className="text-gray-900 text-[13px]">{respuesta}</p>
      </div>
    </div>
  );
};

export default RespuestApi;
