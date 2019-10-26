import React from "react"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../../utils"

export const Text = styled.div(props =>
  mq({
    color: props.theme.colors.gray30,
    fontSize: ["2rem", "2rem", "2rem", "3rem", ...mqFill(2)],
  })
)
