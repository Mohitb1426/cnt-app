/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const CreatePostIcon = ({ isWhiteIcon }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
  >
    <Path
      fill={isWhiteIcon}
      d="M7.964 17.535V11.66H2.088a1.602 1.602 0 0 1 0-3.205h5.876V2.58a1.602 1.602 0 0 1 3.204 0v5.875h5.875a1.602 1.602 0 0 1 0 3.205h-5.875v5.874a1.602 1.602 0 1 1-3.204 0Z"
    />
  </Svg>
)
const Memo = memo(CreatePostIcon)
export default Memo
