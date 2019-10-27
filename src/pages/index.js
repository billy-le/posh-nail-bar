import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components"
import {
  AboutUs,
  Services,
  Testimonials,
  Pricing,
  ContactUs,
} from "../sections"

import "./index.css"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Pricing />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
