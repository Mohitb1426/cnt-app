import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../../common/AppStyles'
const TickIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
  >
    <Path
      fill={ColorTheme.BACKGROUND_COLOR_01}
      d="M16.44.44a1.5 1.5 0 0 1 2.12 2.12l-11 11a1.5 1.5 0 0 1-2.12 0l-5-5a1.5 1.5 0 1 1 2.12-2.12l3.94 3.939 9.94-9.94Z"
    />
  </Svg>
)
const Memo = memo(TickIcon)
export default Memo
