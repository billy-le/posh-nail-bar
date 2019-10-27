// utils
import styled from "@emotion/styled"
import { mq } from "../../utils/mediaQuery"

export const H1 = styled.h1(props =>
  mq({
    color: props.theme.colors.gray10,
    fontSize: ["2rem", "3rem", "3rem", "4rem"],
    margin: 0,
  })
)

export const H2 = styled.h2(props =>
  mq({
    color: props.theme.colors.gray20,
    fontSize: ["4rem", "4rem", "4rem", "4rem"],
    margin: "5rem 0",
    textAlign: "center",
  })
)

export const H3 = styled.h3(props =>
  mq({
    color: props.theme.colors.gray20,
    fontSize: ["2.5rem", "2.5rem", "2.5rem", "3.5rem"],
    margin: "0",
  })
)
