import React from "react"

import Hero from "./Hero"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Description from "./Description"
import CallToAction from "./CallToAction"

const Index = ({ children }) => (
  <>
    <Navbar />
    <Hero />
    {children}
    <CallToAction />
    <Description />
    <Footer />
  </>
)

export default Index
