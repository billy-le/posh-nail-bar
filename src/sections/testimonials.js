import React from "react"

// utils
import styled from "@emotion/styled"
import { mq, mqFill } from "../utils"

// components
import { Container, H2, H3, Text } from "../components/atoms"
import StarImg from "../images/star.png"

const testimonials = [
  {
    customer: "Barbara Chambless",
    feedbackRating: 5,
    review:
      "The absolute best nail salon I’ve found. I have been looking for a new nail salon and stumbled on a jewel here! Kim did my pedicure and my dip  for my nails, I couldn’t be more pleased. Super clean facilities. Kim and her son are super nice and respectful. This is my salon for the future. Thank you guys for your service. Barbara",
  },
  {
    customer: "Lee Ann Anderson Hixson",
    feedbackRating: 5,
    review:
      "Best place in town! The owners and employees are very nice and I am impressed with how clean the business is.  My nails and toes are done exactly how I ask for them to be.  I highly recommend them!  I  won't go anywhere else!",
  },
  {
    customer: "Margaret Okrongly",
    feedbackRating: 4,
    review:
      "Got the ocean hot stone pedicure and dip nails. Pedicure was fantastic, actually got all dead skin off which some other salons on town fail to do. Dip nails look great, the original design on my accent nails did start to peel up on the second day but when I went back in, Tammy fixed it promptly by putting gel polish on instead of regular polish. She even gave me a new design with gorgeous rhinestones, no charge for the fix...",
  },
]

export const Testimonials = props => {
  function renderStars(number) {
    const stars = Array(number)
      .fill(null)
      .map((_, i) => <Star key={i} src={StarImg} />)

    return stars
  }

  return (
    <StyledContainer fixed id="testimonials">
      <H2>Testimonials</H2>
      {testimonials.map((t, i) => (
        <div
          key={i}
          style={{
            marginBottom: i === testimonials.length - 1 ? "0" : "2rem",
          }}
        >
          <FlexContainer key={i}>
            <H3>{t.customer}</H3>
            <Stars>{renderStars(t.feedbackRating)}</Stars>
          </FlexContainer>
          <Content>
            <Text>"{t.review}"</Text>
          </Content>
        </div>
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
  })
)

const FlexContainer = styled.div(
  mq({
    display: "flex",
    alignItems: "center",
    justifyContent: ["space-between", ...mqFill(2), "flex-start"],
  })
)

const Stars = styled(FlexContainer)`
  justify-content: flex-end;
  margin-left: 2rem;
`
const Star = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

const Content = styled.div`
  padding: 3rem;
`
