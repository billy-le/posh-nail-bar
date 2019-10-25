import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import { Navigation } from "./navigation"

const StyledDiv = styled.div`
  margin-top: -60px;
`

const StyledMain = styled.main``

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
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onToggleNav={onToggleNav}
      />
      <Navigation isOpen={isOpen} onCloseClick={onToggleNav} />
      <StyledDiv>
        <StyledMain>{children}</StyledMain>
      </StyledDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
