import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { useClient } from "../../lib/context"

import PageTitle from "../../components/PageTitle"
import Header from "../../components/Header"
import Layout from "../../layout/Client"

const Agendamentos = () => {
  const router = useRouter()
  const { name, calendar, slug } = useClient()
  const [isLoading, setIsLoading] = useState(true)
  const [agendamentos, setAgendamentos] = useState("")

  useEffect(async () => {
    let isSubscribed = true
    if (router.query.calendarId) {
      try {
        const response = await fetch(
          `/api/get-calendar?id=${router.query.calendarId}`
        )
        const data = await response.json()
        if (isSubscribed) {
          setIsLoading(false)
          setAgendamentos(data)
        }
      } catch (error) {
        console.log(error)
        alert("Ocorreu um erro..")
      }
    }
    return () => (isSubscribed = false)
  }, [router.query])

  return (
    <>
      <PageTitle title={`Calendário ${name}`} />
      <Layout>
        <Header name={name} slug={slug} />
        <pre>{!isLoading && JSON.stringify(agendamentos, null, 2)}</pre>
      </Layout>
    </>
  )
}

export default Agendamentos
