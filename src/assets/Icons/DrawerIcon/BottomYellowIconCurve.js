import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const BottomYellowCurveIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={77}
    height={80}
    fill="none"
  >
    <Path
      fill="#FFB804"
      d="M76.867 80S8.512 68.349-1.456 14.315c-9.968-54.035 0 65.687 0 65.687h78.323Z"
    />
  </Svg>
)
const Memo = memo(BottomYellowCurveIcon)
export default Memo
