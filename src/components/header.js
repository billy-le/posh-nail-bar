import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { Container } from "./container"

const NavigationIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.5s ease;
  text-transform: uppercase;
  height: 60px;
`

const StyledContainer = styled(Container)`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`

const NavIconContainer = styled.div`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`

const Header = ({ siteTitle, onToggleNav }) => (
  <StyledHeader id="header">
    <StyledContainer>
      <StyledH1>
        <Link to="/">{siteTitle}</Link>
      </StyledH1>
      <NavIconContainer onClick={onToggleNav}>
        <NavigationIcon />
      </NavIconContainer>
    </StyledContainer>
  </StyledHeader>
)

export default Header
