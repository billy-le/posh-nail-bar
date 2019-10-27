import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../utils"

// components
import { Container, H2, Text } from "../components/atoms"
import Img from "gatsby-image"

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
    <StyledContainer fixed id="about-us" ref={aboutUsRef}>
      <StyledH2>About Us</StyledH2>
      <Content>
        <StyledText>
          Pamper yourself with a luxurious experience at the hands of our
          skilled and trained professionals. From head to toe, we have you
          covered.
        </StyledText>
        <StyledText>
          At Posh Nail Bar, we care about you, our wonderful customers, and here
          to service to your heart’s delights! Enjoy complimentary drinks on us
          while you wait.
        </StyledText>
        <StyledText>
          So sit back, relax, sink into our relaxing chairs, and let the magic
          happen as your fingers and toes transform into a beauty you wouldn’t
          believe.
        </StyledText>
      </Content>
      <BackgroundShape />
      <Image />
    </StyledContainer>
  )
}

const StyledH2 = styled(H2)`
  z-index: 1;
  position: relative;
`

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
  })
)

const Content = styled.div(props =>
  mq({
    margin: "0 auto",
    marginTop: [...mqFill(2), "10%"],
    width: ["100%", "100%", "50%"],
  })
)

const StyledText = styled(Text)`
  margin-bottom: 2.5rem;
  z-index: 1;
  position: relative;
`

const BackgroundShape = styled.div(props =>
  mq({
    height: ["320px", "280px", "400px"],
    width: ["300px", "300px", "500px"],
    backgroundColor: props.theme.colors.red50,
    position: "absolute",
    zIndex: 0,
    opacity: 0.3,
    transform: ["rotate(5deg) translateX(-50%)"],
    top: ["20%", "28%", "25%"],
    left: "50%",
  })
)

const Image = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nail-polish.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
