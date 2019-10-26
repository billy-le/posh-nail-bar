import React from "react"

// utils
import styled from "@emotion/styled"

// components
import { Button, Container } from "./atoms"
import mainImage from "../images/main-image.jpg"
import interior from "../images/interior.jpg"

export const Hero = props => (
  <>
    <StyledContainer>
      <MainImage />
      <StyledButton primary>Book Now</StyledButton>
    </StyledContainer>
    <Container>
      <SecondaryImage />
    </Container>
  </>
)

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
  left: 50%;
  transform: translateX(-50%);
`
