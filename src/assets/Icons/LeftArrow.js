/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const LeftIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={18}
    fill="none"
  >
    <Path
      fill={props.color}
      d="M27 7.5H5.745l5.37-5.385L9 0 0 9l9 9 2.115-2.115-5.37-5.385H27v-3Z"
    />
  </Svg>
)
const Memo = memo(LeftIcon)
export default Memo
