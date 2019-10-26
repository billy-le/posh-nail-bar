import facepaint from "facepaint"

const breakpoints = [
  "@media(min-width: 320px)", // extra small devices
  "@media(min-width: 480px)", // small devices
  "@media(min-width: 800px)", // tablets
  "@media(min-width: 1120px)", // pro tablets and laptops
  "@media(min-width: 1280px)", // laptops and desktops
]

export const mq = facepaint(breakpoints)

export const mqFill = number => Array(number).fill(null)
