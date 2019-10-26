import React from "react"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../../utils"

const StyledButton = styled.button(props => {
  const {
    primary,
    success,
    danger,
    theme: { colors },
  } = props
  let backgroundColor = colors.blue30

  switch (true) {
    case primary:
      backgroundColor = colors.blue30
      break
    case danger:
      backgroundColor = colors.red50
      break
    case success:
      backgroundColor = colors.green20
    default:
      break
  }

  return mq({
    boxShadow: `0 2px 8px ${colors.gray10}`,
    fontSize: ["2rem", "3rem", "4rem", "5rem", ...mqFill(2)],
    backgroundColor,
    border: "none",
    borderRadius: "4px",
    padding: ["1rem 1.5rem", ...mqFill(3), "1rem 4rem"],
    display: "block",
  })
})

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
)
