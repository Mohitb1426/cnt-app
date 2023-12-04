/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const MicIcon = ({ color = '#000000' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={25}
    fill="none"
  >
    <Path
      fill={color}
      d="M5 24.5a1.5 1.5 0 1 1 0-3h2.5v-1.132A8.502 8.502 0 0 1 .5 12v-2a1.5 1.5 0 0 1 3 0v2a5.5 5.5 0 0 0 11 0v-2a1.5 1.5 0 1 1 3 0v2a8.502 8.502 0 0 1-7 8.368V21.5H13a1.5 1.5 0 0 1 0 3H5ZM5 12V4a4 4 0 0 1 8 0v8a4 4 0 1 1-8 0Z"
    />
  </Svg>
)
const Memo = memo(MicIcon)
export default Memo
