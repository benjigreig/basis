import { designTokens as tokens } from "basis";

export default {
  button: {
    fontSize: tokens.fontSizes[0],
    lineHeight: tokens.lineHeights[0],
    fontFamily: tokens.fonts.body,
    fontWeight: tokens.fontWeights.medium,
    borderRadius: tokens.radii[1],
    padding: `0 ${tokens.space[4]}`,
    minHeight: tokens.sizes[7],
    overflow: "hidden",
    transition:
      "transform 100ms ease, color 100ms ease, border-color 100ms ease"
  },
  "button:focus": {
    outline: 0
  },
  "button:focus-visible": {
    boxShadow: tokens.shadows.focus
  },
  "button:disabled": {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  // Secondary default
  "button.secondary.default": {
    color: tokens.colors.grey.t65,
    backgroundColor: "transparent",
    borderWidth: tokens.borderWidths[0],
    borderStyle: "solid",
    borderColor: tokens.colors.grey.t30
  },
  "button.secondary.default:hover": {
    color: tokens.colors.black,
    borderColor: tokens.colors.black
  },
  "button.secondary.default:active": {
    color: tokens.colors.black,
    borderColor: tokens.colors.black,
    transform: "scale(0.95)"
  }
};