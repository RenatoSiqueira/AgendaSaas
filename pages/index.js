import React, { useState, useEffect } from "react"

import Client from "../components/Client"
import PageTitle from "../components/PageTitle"

import Landing from "../layout/Landing"

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [listClients, setListClients] = useState([])

  useEffect(async () => {
    const response = await fetch("/api/users")
    const data = await response.json()

    setListClients(data)
    setIsLoading(false)
  }, [])

  return (
    <Landing>
      <PageTitle title="Seja Bem Vindo - Agenda Saas" />
      {isLoading && (
        <p className="text-center font-bold text-3xl bg-gray-200 py-20">
          Carregando Clientes...
        </p>
      )}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {!isLoading &&
              listClients.map((client, i) => {
                const parseData = JSON.parse(client.perfilConfs)
                return <Client key={i} img={parseData.img} {...client} />
              })}
          </div>
        </div>
      </section>
    </Landing>
  )
}

export default Index
