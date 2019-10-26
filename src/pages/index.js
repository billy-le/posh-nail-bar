import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components"
import { AboutUs, Services } from "../sections"

import "./index.css"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutUs />
      <Services />
    </Layout>
  )
}

export default IndexPage
