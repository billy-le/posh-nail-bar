import React from "react"

// utils
import styled from "@emotion/styled"

// components
import { Container, Text } from "../components/atoms"
import { mq } from "../utils"

export const Footer = props => {
  return (
    <StyledFooter>
      <Container>
        <Text sm>2019 Copyright. All rights reserved.</Text>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer(
  mq({
    height: "60px",
    marginTop: "5rem",
    padding: "2rem",
    textAlign: "center",
  })
)
