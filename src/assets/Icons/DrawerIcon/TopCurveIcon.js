import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { memo } from 'react'
const TopCurveIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={193}
    height={124}
    fill="none"
  >
    <Path
      fill="url(#a)"
      d="M.2 0s17.836 54.955 94.426 49.044C171.216 43.135 192.2 123.5 192.2 123.5V0H.2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={106.167}
        x2={110.364}
        y1={0}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#108477" />
        <Stop stopColor="#128C7E" />
        <Stop offset={0.432} stopColor="#09675C" />
        <Stop offset={1} stopColor="#075E54" />
      </LinearGradient>
    </Defs>
  </Svg>
)
const Memo = memo(TopCurveIcon)
export default Memo
