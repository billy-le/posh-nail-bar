import React, { forwardRef, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../utils"
import debounce from "lodash/debounce"

// components
import { Container, H2, H3, Text } from "../components/atoms"
import Img from "gatsby-image"

export const Services = () => {
  const imageRef = useRef()

  function setBgDimensions() {
    if (imageRef.current) {
      const target = imageRef.current.getBoundingClientRect()
      const backgrounds = document.querySelectorAll(".service-items")
      for (const bg of backgrounds) {
        bg.style.height = `${target.height}px`
        bg.style.width = `${target.width}px`
      }
    }
  }

  useEffect(() => {
    setBgDimensions()
    window.addEventListener("resize", debounce(setBgDimensions, 500))
    return () =>
      window.removeEventListener("resize", debounce(setBgDimensions, 500))
  }, [])

  return (
    <StyledContainer fixed id="services">
      <H2>Services</H2>

      <FlexParent>
        <FlexContainer>
          <Content>
            <StyledH3>Hands</StyledH3>
            <Ul blue className="service-items">
              <Li>
                <Text>Manicure</Text>
              </Li>
              <Li>
                <Text>
                  Repairs and <br></br>Modifications
                </Text>
              </Li>
              <Li>
                <Text>Polish</Text>
              </Li>
            </Ul>
          </Content>
          <Wrapper>
            <ImgSet manicure ref={imageRef} />
          </Wrapper>
        </FlexContainer>

        <FlexContainer reverse>
          <Wrapper>
            <ImgSet pedicure ref={imageRef} />
          </Wrapper>
          <Content>
            <StyledH3
              css={mq({ textAlign: ["right", ...mqFill(2), "center"] })}
            >
              Feet
            </StyledH3>
            <Ul
              pink
              className="service-items"
              css={mq({
                marginLeft: ["-2rem", ...mqFill(2), 0],
                textAlign: ["right", ...mqFill(2), "left"],
              })}
            >
              <Li>
                <Text>Pedicures</Text>
              </Li>
              <Li>
                <Text>
                  Repairs and <br></br>Modifications
                </Text>
              </Li>
              <Li>
                <Text>Polish</Text>
              </Li>
            </Ul>
          </Content>
        </FlexContainer>

        <FlexContainer style={{ marginBottom: 0 }}>
          <Content>
            <StyledH3>Health & Beauty</StyledH3>
            <Ul green className="service-items">
              <Li>
                <Text>Waxing</Text>
              </Li>
              <Li>
                <Text>Threading</Text>
              </Li>
              <Li>
                <Text>Massages</Text>
              </Li>
            </Ul>
          </Content>
          <Wrapper>
            <ImgSet threading ref={imageRef} />
          </Wrapper>
        </FlexContainer>
      </FlexParent>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
  })
)

const StyledH3 = styled(H3)(
  mq({
    textAlign: ["left", ...mqFill(2), "center"],
  })
)

const FlexParent = styled.div(
  mq({
    display: ["block", ...mqFill(2), "flex"],
    alignItems: ["initial", ...mqFill(2), "center"],
    justifyContent: ["initial", ...mqFill(2), "space-between"],
  })
)

const FlexContainer = styled.div(props =>
  mq({
    width: "100%",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    flexDirection: [
      "row",
      ...mqFill(2),
      props.reverse ? "column-reverse" : "column",
    ],
    marginBottom: ["6rem", ...mqFill(2), 0],
    padding: [0, ...mqFill(2), "0 4rem"],
  })
)

const Ul = styled.ul(props => {
  const {
    blue,
    pink,
    green,
    theme: { colors },
  } = props
  return mq({
    listStyle: "none",
    backgroundColor: blue
      ? colors.blue50
      : pink
      ? colors.pink50
      : green
      ? colors.green50
      : "",
    margin: ["1rem 0 0 2rem", ...mqFill(2), "2rem 0 0"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    zIndex: 1,
  })
})

const Li = styled.li`
  margin: 0 2rem;
  white-space: nowrap;
`

const Content = styled.div(
  mq({
    position: "relative",
    zIndex: 1,
    width: ["50%", ...mqFill(2), "100%"],
  })
)

const Wrapper = styled.div(
  mq({ height: "100%", width: ["50%", ...mqFill(2), "100%"] })
)

const ImgSet = forwardRef((props, ref) => {
  const { manicure, pedicure, threading } = props
  const data = useStaticQuery(graphql`
    query {
      manicure: file(relativePath: { eq: "manicure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pedicure: file(relativePath: { eq: "pedicure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      threading: file(relativePath: { eq: "threading.jpg" }) {
        childImageSharp {
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
        zIndex: 2,
        margin: 0,
      }}
      ref={ref}
      fluid={
        manicure
          ? data.manicure.childImageSharp.fluid
          : pedicure
          ? data.pedicure.childImageSharp.fluid
          : threading
          ? data.threading.childImageSharp.fluid
          : null
      }
    />
  )
})
