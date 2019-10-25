import React, { forwardRef, useRef, useEffect } from "react"

import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../components/container"

const ManicureImg = forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "manicure.jpg" }) {
        childImageSharp {
          fixed(height: 160) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        position: "relative",
        zIndex: 10,
        margin: 0,
      }}
      ref={ref}
      // fixed={data.placeholderImage.childImageSharp.fixed}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
})

const StyledContainer = styled(Container)`
  padding: 1rem 1.5rem;
`
const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0 0 3rem;
  z-index: 1;
  position: relative;
`

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 6rem;
`

const H3 = styled.h3`
  font-size: 1.75rem;
  margin-left: 2rem;
`

const Ul = styled.div`
  list-style: none;
  margin-top: 3rem;
`

const Li = styled.li`
  font-size: 1.5rem;
  margin-left: 6rem;
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;
`

const ColoredBackground = styled.div(`
background-color: pink;
position: absolute;
bottom: 0;
left: 15%;
opacity: .5;
`)

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
`

export const Services = () => {
  const imageRef = useRef()

  useEffect(() => {
    if (imageRef.current) {
      const target = imageRef.current.imageRef.current.getBoundingClientRect()
      const backgrounds = document.querySelectorAll(".bg-colored")
      for (const bg of backgrounds) {
        bg.style.height = `${target.height}px`
        bg.style.width = `${target.width}px`
      }
    }
  }, [imageRef])

  return (
    <StyledContainer id="services">
      <H2>Services</H2>
      <FlexContainer>
        <Content>
          <H3>Hands</H3>
          <Ul>
            <Li>Manicures</Li>
            <Li>
              Repairs and <br></br>Modifications
            </Li>
            <Li>Polish</Li>
          </Ul>
        </Content>
        <Wrapper>
          <ManicureImg ref={imageRef} />
        </Wrapper>
        <ColoredBackground className="bg-colored" />
      </FlexContainer>
    </StyledContainer>
  )
}
