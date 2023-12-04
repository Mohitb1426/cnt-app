import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const RightIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
  >
    <Path
      fill="#1C2340"
      d="M5.182 6.806.414 2.042a.896.896 0 0 1 0-1.272.908.908 0 0 1 1.276 0l5.4 5.398a.899.899 0 0 1 .027 1.241l-5.424 5.435a.9.9 0 0 1-.637.263.897.897 0 0 1-.638-1.534l4.764-4.767Z"
    />
  </Svg>
)
const Memo = memo(RightIcon)
export default Memo
