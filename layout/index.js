import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children, client }) => (
  <>
    <Header title={client} />
    {client}
    {children}
    <Footer />
  </>
)

export default Layout
