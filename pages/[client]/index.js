import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { useClient } from "../../lib/context"

import Header from "../../components/Header"
import PickADate from "../../components/PickADate"
import PageTitle from "../../components/PageTitle"

import Layout from "../../layout/Client"

const Index = () => {
  const router = useRouter()
  const { name, calendar, slug, setDados } = useClient()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    if (router.query.client) {
      const response = await fetch("/api/users")
      const data = await response.json()

      const findClient = data.filter(
        (client) => client.slug === router.query.client
      )
      if (findClient.length > 0) {
        const { name, calendar, slug } = findClient[0]
        setDados({ name, calendar, slug })
        setIsLoading(false)
      } else {
        router.push("/")
      }
    }
  }, [router.query])

  if (!isLoading) {
    return (
      <Layout>
        <PageTitle title={`${name} - Agenda Saas`} />
        <Header name={name} slug={slug} calendarId={calendar} />
        <PickADate calendarId={calendar} />
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
