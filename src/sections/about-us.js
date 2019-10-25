import { Container } from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nail-polish.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 3rem 0;
  z-index: 1;
  position: relative;
`

const StyledContainer = styled(Container)`
  padding: 0 4rem 3rem;
  position: relative;
  margin-top: -59px;
  padding-top: 59px;
`

const P = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  z-index: 1;
  position: relative;
`

const BackgroundShape = styled.div`
  height: 300px;
  width: 300px;
  background-color: pink;
  position: absolute;
  top: 25%;
  z-index: 0;
  transform: rotate(5deg) translateX(-50%);
  opacity: 0.5;
  left: 50%;
`

export const AboutUs = () => {
  const aboutUsRef = useRef(null)

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }
  const observer = new IntersectionObserver(onScrollChange, options)

  function onScrollChange([entry]) {
    const header = document.querySelector("#header")

    if (entry.intersectionRatio > 0.2) {
      header.style.backgroundColor = "white"
      header.style.boxShadow = "0 0 4px"
    } else {
      header.style.backgroundColor = "transparent"
      header.style.boxShadow = "none"
    }
  }

  useEffect(() => {
    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current)
    }
  }, [observer])

  return (
    <StyledContainer id="about-us" ref={aboutUsRef}>
      <H2>About Us</H2>
      <P>
        Pamper yourself with a luxurious experience at the hands of our skilled
        and trained professionals. From head to toe, we have you covered.
      </P>
      <P>
        At Posh Nail Bar, we care about you, our wonderful customers, and here
        to service to your heart’s delights! Enjoy complimentary drinks on us
        while you wait.
      </P>
      <P>
        So sit back, relax, sink into our relaxing chairs, and let the magic
        happen as your fingers and toes transform into a beauty you wouldn’t
        believe.
      </P>
      <BackgroundShape />
      <Image />
    </StyledContainer>
  )
}
