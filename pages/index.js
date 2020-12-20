import React from "react"
import { useRouter } from "next/router"

import PageTitle from "../components/PageTitle"
import PickADate from "../components/PickADate"

const Index = () => {
  const router = useRouter()
  console.log("1", router)
  return (
    <>
      <PageTitle title="Seja Bem Vindo - Agenda Saas" />
      <PickADate />
    </>
  )
}

export default Index
