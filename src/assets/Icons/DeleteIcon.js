import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../common/AppStyles'
const SvgComponent = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 14 14"
  >
    <Path
      fill={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
      d="M6 2h2a1 1 0 0 0-2 0ZM5 2a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 8.754 14H5.246a2.5 2.5 0 0 1-2.477-2.162L1.564 3H1a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0v-5ZM8.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm-4.74 6.703A1.5 1.5 0 0 0 5.246 13h3.508a1.5 1.5 0 0 0 1.487-1.297L11.427 3H2.573l1.187 8.703Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
