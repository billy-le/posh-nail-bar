import React, { useState } from "react"

// utils
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq, mqFill } from "../utils"

// components
import { Container, H2, H3 } from "../components/atoms"

// data
import { data } from "../data/pricing"

const FILTERS = [
  "All",
  "Artificial",
  "Hands",
  "Feet",
  "Beauty",
  "Children",
  "A la Carte",
]
const CATEGORIES = ["Artificial", "Treatment", "Children", "Beauty", "Promo"]

export const Pricing = props => {
  const [isActiveFilters, setIsActiveFilters] = useState({
    all: true,
    artificial: false,
    hands: false,
    feet: false,
    beauty: false,
    children: false,
    alacarte: false,
  })

  function onFilterChange(filter) {
    if (filter === "all") {
      setIsActiveFilters({
        all: true,
        artificial: false,
        hands: false,
        feet: false,
        beauty: false,
        children: false,
        alacarte: false,
      })
    } else {
      setIsActiveFilters({
        ...isActiveFilters,
        all: false,
        [filter]: !isActiveFilters[filter],
      })
    }
  }

  function renderFilters() {
    return FILTERS.map((filter, i) => {
      const filterType = filter.replace(/ /g, "").toLowerCase()
      return (
        <Pill
          key={i}
          active={isActiveFilters[filterType]}
          onClick={() => onFilterChange(filterType)}
        >
          {filter}
        </Pill>
      )
    })
  }

  function renderPriceItem(item) {
    return (
      <PriceItem>
        <span>
          {item.type} {item.subcategory} {item.service}
        </span>
        <Price>{item.price}</Price>
      </PriceItem>
    )
  }

  return (
    <StyledContainer fixed id="pricing">
      <H2>Pricing</H2>
      <FlexParent>{renderFilters()}</FlexParent>
      <Grid>
        {CATEGORIES.map((cat, i) => {
          const priceItems = data
            .map((datum, i) => {
              if (datum.category === cat) {
                if (isActiveFilters.all) {
                  return renderPriceItem(datum)
                } else {
                  switch (true) {
                    case isActiveFilters.artificial &&
                      datum.category.includes("Artificial"):
                      return renderPriceItem(datum)
                    case isActiveFilters.beauty &&
                      datum.category.includes("Beauty"):
                      return renderPriceItem(datum)
                    case isActiveFilters.children &&
                      datum.category.includes("Children"):
                      return renderPriceItem(datum)
                    case isActiveFilters.feet &&
                      datum.subcategory.includes("Feet"):
                      return renderPriceItem(datum)
                    case isActiveFilters.hands &&
                      datum.subcategory.includes("Hands"):
                      return renderPriceItem(datum)
                    case isActiveFilters.alacarte &&
                      datum.subcategory.includes("A la Carte"):
                      return renderPriceItem(datum)
                    default:
                      return null
                  }
                }
              } else {
                return null
              }
            })
            .filter(x => x)

          if (priceItems.length) {
            return (
              <div key={i}>
                <StyledH3>{cat}</StyledH3>
                <PriceList>{priceItems}</PriceList>
              </div>
            )
          } else {
            return null
          }
        })}
      </Grid>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)(props =>
  mq({
    position: "relative",
    marginTop: ["-60px", ...mqFill(2), "-80px"],
    paddingTop: ["60px", ...mqFill(2), "80px"],
    marginBottom: "60px",
  })
)

const StyledH3 = styled(H3)(props =>
  mq({
    fontColor: props.theme.colors.gray30,
    fontSize: ["3.25rem", "3.25rem"],
    marginBottom: ["1.5rem", ...mqFill(4)],
    textDecoration: "underline",
  })
)

const Grid = styled.div(
  mq({
    display: "grid",
    gridTemplateColumns: ["1fr", null, "1fr 1fr", "1fr 1fr 1fr"],
    gridGap: "4rem",
  })
)

const PriceList = styled.div`
  margin-bottom: 2rem;
`

const FlexParent = styled.div(props =>
  mq({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  })
)

const Pill = styled.button(props =>
  css(
    mq({
      backgroundColor: props.active
        ? props.theme.colors.pink10
        : props.theme.colors.pink50,
      padding: "0 1.5rem",
      borderRadius: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      marginRight: "3rem",
      marginBottom: "3rem",
      "&:active": {
        backgroundColor: props.theme.colors.pink20,
      },
    })
  )
)

const PriceItem = styled.div(props =>
  mq({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "2.5rem",
    color: props.theme.colors.gray30,
  })
)

const Price = styled.span(props => ({
  fontWeight: "bold",
  color: props.theme.colors.gray20,
}))
