import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#59A0F1"
      d="M9.454.668a.667.667 0 0 1 .952.255l.598 1.155c.12.231.363.372.623.36l1.299-.06a.667.667 0 0 1 .697.696l-.06 1.3a.667.667 0 0 0 .36.622l1.154.597c.349.18.467.622.255.952L14.63 7.64c-.14.22-.14.5 0 .72l.702 1.095a.667.667 0 0 1-.255.952l-1.155.597a.667.667 0 0 0-.36.623l.06 1.299a.667.667 0 0 1-.696.697l-1.3-.06a.667.667 0 0 0-.622.36l-.598 1.154a.667.667 0 0 1-.952.255l-1.094-.701a.667.667 0 0 0-.72 0l-1.095.701a.667.667 0 0 1-.952-.255l-.597-1.155a.667.667 0 0 0-.623-.36l-1.3.06a.667.667 0 0 1-.696-.696l.06-1.3a.667.667 0 0 0-.36-.622l-1.155-.597a.667.667 0 0 1-.255-.952L1.37 8.36c.14-.22.14-.5 0-.72L.667 6.545a.667.667 0 0 1 .255-.952l1.156-.597a.667.667 0 0 0 .36-.623l-.061-1.299a.667.667 0 0 1 .697-.697l1.299.06a.667.667 0 0 0 .623-.36L5.593.924a.667.667 0 0 1 .952-.255l1.095.701c.22.14.5.14.72 0L9.454.668Z"
    />
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m5.296 8.203 1.642 1.524 3.728-3.595"
    />
  </Svg>
)
export default SvgComponent
