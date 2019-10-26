import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"
import { theme, mq } from "../utils"

// components
import { Header, headerHeightsOffset, Navigation } from "./"

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
      <StyledDiv>
        <StyledMain>{children}</StyledMain>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default Layout

const StyledDiv = styled.div(
  mq({
    marginTop: headerHeightsOffset,
  })
)

const StyledMain = styled.main``
