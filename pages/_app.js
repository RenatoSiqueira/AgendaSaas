import React from "react"
import "../css/styles.css"

import { ClientProvider } from "../lib/context"

const MyApp = ({ Component, pageProps }) => (
  <ClientProvider>
    <Component {...pageProps} />
  </ClientProvider>
)

export default MyApp
