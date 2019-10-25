import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero"
import { AboutUs } from "../sections/about-us"
import { Services } from "../sections/services"

import "normalize.css"
import "./index.css"

const IndexPage = () => {
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
