import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// utils
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq, mqFill } from "../utils"

// components
import { Container, H2, Button, Text } from "../components/atoms"

export const ContactUs = props => {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <StyledContainer fixed id="contact-us">
      <H2>Contact Us</H2>

      <GridParent>
        <Form onSubmit={handleSubmit}>
          <FieldControl>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" type="text" name="name"></Input>
          </FieldControl>

          <FieldControl>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" name="email"></Input>
          </FieldControl>

          <FieldControl>
            <Label htmlFor="phone-number">Phone *</Label>
            <Input id="phone-number" type="tel" name="phone-number"></Input>
          </FieldControl>

          <FieldControl>
            <Label htmlFor="message">Message *</Label>
            <TextArea id="message" name="message" rows={3}></TextArea>
          </FieldControl>

          <Buttons>
            <Button
              style={{ marginRight: "16px" }}
              danger
              onClick={e => e.preventDefault()}
            >
              Reset
            </Button>
            <Button primary type="submit">
              Submit
            </Button>
          </Buttons>
        </Form>

        <MapDetailsContainer>
          <Map></Map>

          <MapDetails>
            <FlexParent>
              <Text bold>Hours of Operation:</Text>
              <Text sm>
                Mon - Sat / 9am - 7:30pm <br /> Sun / Closed
              </Text>
            </FlexParent>

            <FlexParent>
              <Text bold>Phone Number:</Text>
              <Text sm>
                <StyledLink href="tel:+19036309300">903.630.9300</StyledLink>
              </Text>
            </FlexParent>

            <FlexParent>
              <Text bold>Address:</Text>
              <Text sm>
                4548 S Broadway Ave. <br />
                Tyler, TX 75703
              </Text>
            </FlexParent>
          </MapDetails>
        </MapDetailsContainer>
      </GridParent>
    </StyledContainer>
  )
}

const Form = styled.form(
  mq({
    width: ["100%", ...mqFill(2), "100%"],
    marginBottom: ["6rem", ...mqFill(2), "0"],
  })
)

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
  })
)

const FieldControl = styled.fieldset(props => ({
  margin: 0,
  border: "none",
  marginBottom: "2rem",
}))

const Label = styled.label(props => ({
  color: props.theme.colors.gray20,
  fontSize: "3rem",
  display: "block",
}))

const Input = styled.input(props =>
  css({
    fontSize: "2.5rem",
    color: props.theme.colors.gray10,
    width: "100%",
    borderRadius: "4px",
    border: `1px solid ${props.theme.colors.gray70}`,
    padding: ".5rem 1rem",
    "&:focus": {
      outline: `1px solid ${props.theme.colors.blue10}`,
    },
  })
)

const TextArea = styled.textarea(props =>
  css({
    fontSize: "2.5rem",
    color: props.theme.colors.gray10,
    width: "100%",
    borderRadius: "4px",
    border: `1px solid ${props.theme.colors.gray70}`,
    padding: ".5rem 1rem",
    "&:focus": {
      outline: `1px solid ${props.theme.colors.blue10}`,
    },
  })
)

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

const GridParent = styled.div(props =>
  mq({
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: ["1fr", ...mqFill(2), "1fr 1fr"],
    gridColumnGap: "4rem",
  })
)

const MapDetailsContainer = styled.div(
  mq({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  })
)

const MapDetails = styled.div(
  mq({
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: ["column", ...mqFill(2), "row"],
  })
)

const FlexParent = styled.div(
  mq({
    display: "flex",
    flexDirection: ["row", ...mqFill(2), "column"],
    justifyContent: ["space-between", ...mqFill(2), "initial"],
    textAlign: ["right", ...mqFill(2), "left"],
  })
)

const StyledLink = styled.a(
  props => `
  text-decoration: none;
  color: ${props.theme.colors.blue10}
`
)

const Map = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "map.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Img
      style={{
        marginBottom: "1rem",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}
