import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import PageTitle from "../../components/PageTitle"
import Header from "../../components/Header/headerAgendamento"
import Layout from "../../layout/Client"

const Agendamentos = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [client, setClient] = useState("")

  useEffect(async () => {
    if (router.query.calendarId) {
      try {
        const response = await fetch(
          `/api/get-calendar?id=${router.query.calendarId}`
        )
        const data = await response.json()
        setIsLoading(false)
        setClient(data)
      } catch (error) {
        console.log(error)
        alert("Ocorreu um erro..")
      }
    }
  }, [router.query])

  return (
    <>
      <PageTitle title="Calendário - Agenda Simples" />
      <Layout>
        <Header />
        <pre>{!isLoading && JSON.stringify(client, null, 2)}</pre>
      </Layout>
    </>
  )
}

export default Agendamentos
