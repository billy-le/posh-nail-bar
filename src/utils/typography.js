import Typography from "typography"

const typography = new Typography({
  bodyFontFamily: ["Cormorant"],
  baseFontSize: "10px",
  scaleRatio: "0",
  googleFonts: [
    {
      name: "Antic Diodone",
      styles: ["400"],
    },
    {
      name: "Cormorant",
      styles: ["400", "600"],
    },
  ],
  includeNormalize: true,
  headerFontFamily: ["Antic Diodone"],
  headerWeight: "400",
})

export default typography
