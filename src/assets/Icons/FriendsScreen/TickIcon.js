import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../../common/AppStyles'
const TickIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
  >
    <Path
      fill="url(#a)"
      d="M8.103 0c-4.419 0-8 3.58-8 8s3.581 8 8 8c4.42 0 8-3.58 8-8s-3.58-8-8-8ZM12.2 5.788l-5.142 5.166h-.004c-.065.065-.242.211-.446.211-.146 0-.311-.08-.45-.219L4.003 8.792a.153.153 0 0 1 0-.219l.685-.685c.03-.03.07-.046.108-.046.038 0 .076.016.107.046l1.708 1.708 4.692-4.727c.031-.03.07-.046.108-.046a.14.14 0 0 1 .108.046l.673.696c.069.066.069.162.007.223Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={4.103}
        x2={4.103}
        y1={4}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A7E05F" />
        <Stop offset={1} stopColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
      </LinearGradient>
    </Defs>
  </Svg>
)
const Memo = memo(TickIcon)
export default Memo
