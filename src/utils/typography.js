import Typography from "typography"

const typography = new Typography({
  bodyFontFamily: ["Cormorant"],
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
  includeNormalize: false,
  headerFontFamily: ["Antic Diodone"],
  headerWeight: "400",
})

export default typography
