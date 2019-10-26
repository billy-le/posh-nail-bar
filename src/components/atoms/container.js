import React, { forwardRef } from "react"

// utils
import styled from "@emotion/styled"

export const Container = forwardRef((props, ref) => (
  <StyledDiv {...props} ref={ref}>
    {props.children}
  </StyledDiv>
))

const StyledDiv = styled.div(
  props => `
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: ${props.fixed ? "1rem 3rem" : props.fluid ? "1rem" : "0"};
`
)
