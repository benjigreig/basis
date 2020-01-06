import tokens from "../tokens";

export default {
  checkboxLabelContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  checkboxInput: {
    // See: https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
    position: "absolute",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)"
  },
  checkboxLabel: {
    display: "inline-flex",
    alignItems: "flex-start",
    padding: `${tokens.space[3]} ${tokens.space[4]}`,
    minHeight: tokens.sizes[6],
    fontSize: tokens.fontSizes[1],
    fontWeight: tokens.fontWeights.light,
    lineHeight: tokens.lineHeights[2],
    fontFamily: tokens.fonts.body,
    color: tokens.colors.black
  },
  "checkboxLabel.focused": {
    boxShadow: tokens.shadows.focus,
    borderRadius: tokens.radii[0]
  },
  "checkboxLabel.checked": {
    backgroundColor: tokens.colors.secondary.lightBlue.t30,
    color: tokens.colors.primary.blue.t100
  },
  "checkboxLabel.grey.t05": {
    backgroundColor: tokens.colors.grey.t05
  },
  "checkboxLabel.white": {
    backgroundColor: tokens.colors.white
  },
  checkboxIcon: {
    flexShrink: 0,
    width: tokens.sizes[6],
    height: tokens.sizes[6],
    marginRight: tokens.space[3]
  },
  "checkboxIcon.secondary.lightBlue.t30": {
    fill: tokens.colors.secondary.lightBlue.t30
  },
  "checkboxIcon.white": {
    fill: tokens.colors.white
  },
  checkboxIconMark: {
    stroke: tokens.colors.primary.blue.t100
  }
};