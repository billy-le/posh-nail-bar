import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../components/container"

const sections = [
  "Home",
  "About Us",
  "Services",
  "Professionals",
  "Testimonials",
  "Pricing",
  "Contact Us",
]

const Overlay = styled.div`
  background-color: #fff;
  position: fixed;
  height: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 50;
  top: 0;
`

const NavList = styled.ul`
  list-style: none;
  margin: 8rem 0 0;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NavItem = styled.li`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const CloseIconContainer = styled(Container)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`

const CloseIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "close.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export const Navigation = ({ isOpen, onCloseClick }) => (
  <Overlay
    style={{
      right: isOpen ? "0" : "-75vw",
      width: isOpen ? "75vw" : "0",
    }}
  >
    <CloseIconContainer onClick={onCloseClick}>
      <CloseIcon />
    </CloseIconContainer>
    <NavList>
      {sections.map((s, i) => (
        <NavItem key={i} onClick={onCloseClick}>
          <a href={`#${s.replace(" ", "-").toLowerCase()}`}>{s}</a>
        </NavItem>
      ))}
    </NavList>
  </Overlay>
)
