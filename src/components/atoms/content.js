import React from "react"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../../utils"

export const Text = styled.div(props =>
  mq({
    color: props.theme.colors.gray30,
    fontSize: props.sm
      ? ["1.5rem", ...mqFill(2), "2.5rem"]
      : ["2rem", "2rem", "2rem", "3rem", ...mqFill(2)],
    fontWeight: props.bold ? "bold" : null,
  })
)
