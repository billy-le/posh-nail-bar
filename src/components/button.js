import React from "react"

import styled from "@emotion/styled"

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  display: block;
`

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
)
