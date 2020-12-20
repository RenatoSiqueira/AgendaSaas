import React from "react"
import Link from "next/link"

const Client = ({ slug, name }) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://source.unsplash.com/collection/1256986/720x400"
        alt="Professionals"
      />
      <div className="p-6">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3">
          Marque um horário na agenda {name}.
        </p>
        <div className="flex items-center flex-wrap ">
          <Link href={`/${slug}`}>
            <a className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">
              Acessar
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Client
