import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// utils
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq, mqFill } from "../utils"

// components
import { Container, H1 } from "./atoms"
import Img from "gatsby-image"

export const Header = ({ siteTitle, onToggleNav }) => (
  <StyledHeader id="header">
    <StyledContainer fixed>
      <StyledH1>
        <Link to="/">{siteTitle}</Link>
      </StyledH1>
      <NavIconContainer tabIndex={1} onClick={onToggleNav}>
        <NavigationIcon />
      </NavIconContainer>
    </StyledContainer>
  </StyledHeader>
)

const headerHeights = ["60px", "60px", null, "80px", ...mqFill(2)]
export const headerHeightsOffset = headerHeights.map(ht => (ht ? `-${ht}` : ht))

const StyledHeader = styled.header(
  mq({
    position: "sticky",
    top: 0,
    zIndex: 10,
    transition: "all 0.5s ease",
    textTransform: "uppercase",
    height: headerHeights,
  })
)

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledH1 = styled(H1)`
  margin-top: 4px;
`

const NavIconContainer = styled.div(props =>
  css({
    height: "3rem",
    width: "3rem",
    cursor: "pointer",
    "&:focus": {
      outline: `1px solid ${props.theme.colors.blue10}`,
    },
  })
)

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
