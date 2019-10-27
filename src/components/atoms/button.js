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
      break
    default:
      backgroundColor = colors.gray30
      break
  }

  return mq({
    backgroundColor,
    border: "none",
    borderRadius: "4px",
    boxShadow: `0 4px 8px rgba(0,0,0,0.3)`,
    color: colors.gray10,
    display: "block",
    fontSize: ["2rem", "2rem", "3rem", "3rem", ...mqFill(2)],
    padding: ["1rem 1.5rem", ...mqFill(3), ".5rem 2rem"],
  })
})

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
)
