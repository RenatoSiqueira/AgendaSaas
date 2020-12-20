import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Header from "../../components/Header/headerClient"
import PickADate from "../../components/PickADate"
import PageTitle from "../../components/PageTitle"

import Layout from "../../layout/Client"

const Index = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [client, setClient] = useState("")

  useEffect(async () => {
    if (router.query.client) {
      const response = await fetch("/api/users")
      const data = await response.json()

      const findClient = data.filter(
        (client) => client.slug === router.query.client
      )
      if (findClient.length > 0) {
        const { name, calendar, slug } = findClient[0]
        setClient({ name, calendar, slug })
        setIsLoading(false)
      } else {
        router.push("/")
      }
    }
  }, [router.query])

  if (!isLoading) {
    return (
      <Layout>
        <PageTitle title={`${client.name} - Agenda Saas`} />
        <Header
          name={client.name}
          slug={client.slug}
          calendarId={client.calendar}
        />
        <PickADate calendarId={client.calendar} />
      </Layout>
    )
  }
  return (
    <>
      <PageTitle title="Identificando..." />
      <p>Aguarde...</p>
    </>
  )
}

export default Index
