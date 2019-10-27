import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"
import { mq, mqFill } from "../utils"

// components
import { Container, H2, H3, Text } from "../components/atoms"
import Img from "gatsby-image"

const professionals = [
  {
    name: "User",
    position: "Owner",
    yrsOfExp: 20,
    facts: [],
  },
]

export const Professionals = props => (
  <StyledContainer fixed id="professionals">
    <H2>Professionals</H2>
    {professionals.map((person, i) => (
      <CardContainer
        key={i}
        style={{
          marginBottom: i === professionals.length - 1 ? 0 : null,
        }}
      >
        <ImgSet name={person.name}></ImgSet>
        <ContentContainer>
          <StyledH3>
            {person.name}, {person.position}
          </StyledH3>
          <StyledUL>
            <StyledLi>
              <Text>{person.yrsOfExp}+ yrs. of experience</Text>
            </StyledLi>
            {person.facts.map((fact, i) => (
              <StyledLi key={i}>
                <Text>{fact}</Text>
              </StyledLi>
            ))}
          </StyledUL>
        </ContentContainer>
      </CardContainer>
    ))}
    <div></div>
  </StyledContainer>
)

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
  })
)

const CardContainer = styled(Container)(css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`)

const ContentContainer = styled.div`
  margin-left: 2rem;
`

const StyledH3 = styled(H3)`
  margin-bottom: 1rem;
`

const StyledUL = styled.ul(`
list-style: none;
`)

const StyledLi = styled.li(`
margin-bottom: 0;
`)

const ImgSet = props => {
  const data = useStaticQuery(
    graphql`
      query {
        default: file(relativePath: { eq: "user.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const theme = useTheme()
  let { name } = props
  let fluidImage = ""
  switch (name) {
    default:
      fluidImage = data.default.childImageSharp.fluid
      name = null
      break
  }

  return (
    <Img
      style={{
        borderRadius: "100%",
        height: "100px",
        width: "100px",
        border: `4px solid ${theme.colors.pink30}`,
      }}
      imgStyle={{
        padding: !name ? "2rem" : null,
      }}
      fluid={fluidImage}
    />
  )
}
