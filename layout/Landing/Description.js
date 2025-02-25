import React from "react"

const Description = () => (
  <section className="text-gray-700 body-font" id="caracteristicas">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Características
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Confira a lista de personalizações e vantagens que dispomos:
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Baixo Investimento</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Personalização de Cores
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Agendamento direto na Sua Agenda
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Uso Simplificado</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Otimizado para Celulares
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-200 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">
              Não Requer Instalação
            </span>
          </div>
        </div>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
        Assinar Agora
      </button>
    </div>
  </section>
)

export default Description
