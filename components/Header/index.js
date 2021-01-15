import React, { useState, useEffect } from "react"
import Link from "next/link"

import { useClient } from "../../lib/context"

const HeaderClient = () => {
  const [perfil, setPerfil] = useState({})
  const { name, calendar: calendarId, slug, perfilConfs } = useClient()

  useEffect(() => {
    const configs = JSON.parse(perfilConfs)
    setPerfil(configs)
  }, [])

  return (
    <header
      className={`w-full text-gray-700 ${perfil.back} border-t border-gray-100 shadow-sm body-font`}
    >
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
          <Link href={`/${slug}`}>
            <a
              className={`mr-5 ${perfil.text} font-medium hover:text-gray-900 capitalize`}
            >
              Agenda: {name}
            </a>
          </Link>
        </nav>
        <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
          AgendaSaaS{" "}
          <div className="h6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
          </div>
        </a>
        <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
          {calendarId && (
            <Link href={`/agendamentos/${calendarId}`}>
              <a
                className={`px-4 py-2 text-xs font-bold ${perfil.text} uppercase transition-all duration-150 ${perfil.btColor}-500 rounded shadow outline-none active:${perfil.btColor}-600 hover:shadow-md focus:outline-none ease`}
              >
                Ver Agendamentos
              </a>
            </Link>
          )}
          {!calendarId && (
            <Link href={`/${slug}`}>
              <a
                className={`px-4 py-2 text-xs font-bold ${perfil.text} uppercase transition-all duration-150 ${perfil.btColor}-500 rounded shadow outline-none active:${perfil.btColor}-600 hover:shadow-md focus:outline-none ease`}
              >
                Agendar Horário
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderClient
