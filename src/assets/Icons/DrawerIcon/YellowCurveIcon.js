import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const YellowCurveIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={217}
    height={138}
    fill="none"
  >
    <Path
      fill="#FFB804"
      d="M.733 0S20.75 61.184 106.701 54.605C192.652 48.025 216.2 137.5 216.2 137.5V0H.733Z"
    />
  </Svg>
)
const Memo = memo(YellowCurveIcon)
export default Memo
