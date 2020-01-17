import { designTokens as tokens } from "basis";

export default {
  selectInput: {
    display: "inline-block",
    fontSize: tokens.fontSizes[0],
    lineHeight: tokens.lineHeights[0],
    fontFamily: tokens.fonts.body,
    fontWeight: tokens.fontWeights.light,
    height: tokens.sizes[8],
    paddingLeft: tokens.space[3],
    paddingRight: tokens.space[9],
    margin: 0,
    borderRadius: tokens.radii[1],
    borderWidth: tokens.borderWidths[0],
    borderStyle: "solid",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' role='img' aria-label='Triangle down'%3E%3Cpath d='M20.747 14.509l-4.181 4.25a.786.786 0 01-1.132 0l-4.179-4.247a.885.885 0 01-.231-.827c.07-.3.287-.536.569-.62.282-.084 8.607-.101 8.912.035a.86.86 0 01.495.802.874.874 0 01-.253.607z' fill='%23414141'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 0 top 50%`,
    alignSelf: "flex-start",
    transition: "color 100ms ease, border-color 100ms ease"
  },
  "selectInput.fullWidth": {
    alignSelf: "auto"
  },
  "selectInput:focus": {
    outline: 0
  },
  "selectInput.default": {
    color: tokens.colors.grey.t65,
    backgroundColor: "transparent",
    borderColor: tokens.colors.grey.t30
  },
  "selectInput.default:focus": {
    color: tokens.colors.black,
    borderColor: tokens.colors.black
  },
  "selectInput.default:hover": {
    color: tokens.colors.black,
    borderColor: tokens.colors.black
  },
  "selectInput.default:active": {
    color: tokens.colors.black,
    borderColor: tokens.colors.black
  }
};