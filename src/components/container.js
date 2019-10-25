import React, { forwardRef } from "react"
import styled from "@emotion/styled"

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const Container = forwardRef((props, ref) => (
  <StyledDiv {...props} ref={ref}>
    {props.children}
  </StyledDiv>
))
