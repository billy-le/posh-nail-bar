import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../utils"
import throttle from "lodash/throttle"

// components
import { Container, H1 } from "./atoms"
import Img from "gatsby-image"

const sections = [
  "About Us",
  "Services",
  "Testimonials",
  "Pricing",
  "Contact Us",
]

export const Header = ({ siteTitle, onToggleNav }) => {
  const headerRef = useRef()

  function onScroll() {
    const headerOffsetTop = headerRef.current.offsetTop
    const { pageYOffset } = window
    if (pageYOffset > headerOffsetTop) {
      headerRef.current.style.background = "white"
      headerRef.current.style.boxShadow = "0 0 8px"
    } else if (pageYOffset === headerOffsetTop) {
      headerRef.current.style.background = "transparent"
      headerRef.current.style.boxShadow = "none"
    }
  }

  useEffect(() => {
    if (headerRef.current) {
      window.onscroll = throttle(() => onScroll(), 500)
    }
  }, [])

  return (
    <StyledHeader ref={headerRef} id="header">
      <StyledContainer fixed>
        <StyledH1>
          <Link to="/">{siteTitle}</Link>
        </StyledH1>
        <StyledNav>
          <StyledUL>
            {sections.map((section, i) => (
              <StyledListItem key={i}>
                <a href={`#${section.replace(" ", "-").toLowerCase()}`}>
                  {section}
                </a>
              </StyledListItem>
            ))}
          </StyledUL>
        </StyledNav>
        <NavIconContainer tabIndex={1} onClick={onToggleNav}>
          <NavigationIcon />
        </NavIconContainer>
      </StyledContainer>
    </StyledHeader>
  )
}

const headerHeights = ["60px", "60px", null, "80px", ...mqFill(2)]
export const headerHeightsOffset = headerHeights.map(ht => (ht ? `-${ht}` : ht))

const StyledHeader = styled.header(
  mq({
    height: headerHeights,
    position: "fixed",
    textTransform: "uppercase",
    top: 0,
    transition: "all 0.5s ease",
    width: "100%",
    zIndex: 10,
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

const StyledNav = styled.nav(
  mq({
    display: ["none", ...mqFill(2), "block"],
  })
)

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  list-style: none;
`

const StyledListItem = styled.li`
  margin-bottom: 0;
  margin-left: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
`

const NavIconContainer = styled.div(props =>
  mq({
    display: ["block", ...mqFill(2), "none"],
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
