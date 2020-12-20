import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Layout from "../../layout"

import PageTitle from "../../components/PageTitle"
import PickADate from "../../components/PickADate"

const Index = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [client, setClient] = useState("")

  useEffect(() => {
    if (router.query.client) {
      setIsLoading(false)
      setClient({ client: router.query.client })
    }
  }, [router.query])

  if (!isLoading) {
    return (
      <Layout {...client}>
        <PageTitle title={`${client.client} - Agenda Saas`} />
        <PickADate />
      </Layout>
    )
  }
  return <p>Aguarde...</p>
}

export default Index
