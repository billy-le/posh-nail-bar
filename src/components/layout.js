import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../utils"

// components
import { Header, Navigation, Footer } from "./"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function onToggleNav() {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onToggleNav={onToggleNav}
      />
      <Navigation isOpen={isOpen} onCloseClick={onToggleNav} />

      <StyledMain>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

const StyledMain = styled.main``
