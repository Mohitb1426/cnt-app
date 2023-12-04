import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../../common/AppStyles'
const ThreeDotMarketPlace = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={22}
    fill="none"
  >
    <Path
      fill={ColorTheme.PRIMARY_BACKGROUND}
      d="M3 16.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-8a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm0-8a2.5 2.5 0 1 1 0 5.001A2.5 2.5 0 0 1 3 .5Z"
    />
  </Svg>
)
const Memo = memo(ThreeDotMarketPlace)
export default Memo
