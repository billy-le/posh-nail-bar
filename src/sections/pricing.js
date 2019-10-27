import React from "react"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../utils"

// components
import { Container, H2 } from "../components/atoms"

export const Pricing = props => {
  return (
    <StyledContainer fixed id="pricing">
      <H2>Pricing</H2>
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
