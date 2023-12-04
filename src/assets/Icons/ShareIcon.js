/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'

const ShareIcon = ({ color = '#C8C7CC' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
  >
    <Path
      fill={color}
      d="M10.288 9.844c-.651 0-1.25.225-1.723.602L5.613 8.601a2.782 2.782 0 0 0 0-1.201l2.952-1.846a2.766 2.766 0 1 0-.978-1.563L4.636 5.836a2.766 2.766 0 1 0 0 4.328l2.953 1.845a2.766 2.766 0 1 0 2.7-2.165Z"
    />
  </Svg>
)
const Memo = memo(ShareIcon)
export default Memo
