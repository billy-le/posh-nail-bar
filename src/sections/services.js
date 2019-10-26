import React, { forwardRef, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// utirls
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"

// components
import { Container, H2, H3, Text } from "../components/atoms"
import Img from "gatsby-image"

export const Services = () => {
  const imageRef = useRef()

  useEffect(() => {
    if (imageRef.current) {
      const target = imageRef.current.imageRef.current.getBoundingClientRect()
      const backgrounds = document.querySelectorAll("ul")
      for (const bg of backgrounds) {
        bg.style.height = `${target.height}px`
        bg.style.width = `${target.width}px`
      }
    }
  }, [imageRef])

  return (
    <Container fixed id="services">
      <H2>Services</H2>
      <FlexContainer>
        <Content>
          <H3>Hands</H3>
          <Ul blue>
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

      <FlexContainer>
        <Wrapper>
          <ImgSet pedicure ref={imageRef} />
        </Wrapper>
        <Content>
          <H3 css={{ textAlign: "right" }}>Feet</H3>
          <Ul pink style={{ marginLeft: "-2rem", textAlign: "right" }}>
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

      <FlexContainer>
        <Content>
          <H3>Health & Beauty</H3>
          <Ul green>
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
    </Container>
  )
}

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 6rem;
`

const Ul = styled.ul(props => {
  const {
    blue,
    pink,
    green,
    theme: { colors },
  } = props
  return `
  list-style: none;
  background-color: ${
    blue ? colors.blue50 : pink ? colors.pink50 : green ? colors.green50 : ""
  };
  margin: 1rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
`
})

const Li = styled.li`
  margin: 0 2rem;
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;
  z-index: 1;
`

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
`
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
