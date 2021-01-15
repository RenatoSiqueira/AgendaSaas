import React from "react"

const Hero = () => (
  <section className="text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Gerenciamento integrado com seu
          <br className="hidden lg:inline-block" />
          Google Calendar
        </h1>
        <p className="mb-8 leading-relaxed">
          O AgendaSaas é um projeto demonstração de como fazer um Saas
          utilizando o Google Spreadsheets para gerenciamento e personalização,
          além de ser integrado dinamicamente com o Google Calendar de cada
          Cliente.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Assinar Agora
          </button>
          <a href="caracteristicas">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Ver Características
            </button>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
)

export default Hero
