import React from "react"

import styled from "@emotion/styled"

import { Container } from "./container"
import { Button } from "./button"
import mainImage from "../images/main-image.jpg"
import interior from "../images/interior.jpg"

const MainImage = styled.div`
    height: 75vh;
    background-image: url("${mainImage}");
    background-size: cover;
    background-position: 50% 60%;
    position: relative;
`

const SecondaryImage = styled.div`
height: 25vh;
background-image: url("${interior}");
background-size: cover;
background-position: center;
`

const StyledContainer = styled(Container)`
  position: relative;
`
const StyledButton = styled(Button)`
  position: absolute;
  bottom: -1.75rem;
  z-index: 1;
  background-color: lightblue;
  font-size: 2rem;
  left: 50%;
  transform: translateX(-50%);
`

export const Hero = props => (
  <>
    <StyledContainer>
      <MainImage />
      <StyledButton>Book Now</StyledButton>
    </StyledContainer>
    <Container>
      <SecondaryImage />
    </Container>
  </>
)
