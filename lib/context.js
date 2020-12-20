import React, { useState, createContext, useContext } from "react"

export const ClientContext = createContext()

export const ClientProvider = ({ children }) => {
  const [dados, setDados] = useState({})

  return (
    <ClientContext.Provider value={{ ...dados, setDados }}>
      {children}
    </ClientContext.Provider>
  )
}

export const useClient = () => {
  return useContext(ClientContext)
}
