import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { memo } from 'react'
const CameraIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={99}
    height={99}
    fill="none"
  >
    <Circle cx={49.5} cy={49.5} r={49.5} fill="#D6D6D6" opacity={0.28} />
    <Circle cx={49.5} cy={49.5} r={49.5} fill="#D6D6D6" opacity={0.28} />
    <Path
      fill="#4A4A4A"
      d="M68 41.875v20.25a3.376 3.376 0 0 1-3.375 3.375h-29.25A3.376 3.376 0 0 1 32 62.125v-20.25a3.376 3.376 0 0 1 3.375-3.375h6.188l.864-2.313A3.37 3.37 0 0 1 45.584 34h8.825a3.37 3.37 0 0 1 3.157 2.187l.871 2.313h6.188A3.376 3.376 0 0 1 68 41.875ZM58.437 52c0-4.655-3.782-8.438-8.437-8.438-4.655 0-8.438 3.783-8.438 8.438 0 4.655 3.783 8.438 8.438 8.438 4.655 0 8.438-3.783 8.438-8.438Zm-2.25 0A6.197 6.197 0 0 1 50 58.188 6.197 6.197 0 0 1 43.812 52 6.197 6.197 0 0 1 50 45.812 6.197 6.197 0 0 1 56.188 52Z"
    />
  </Svg>
)
const Memo = memo(CameraIcon)
export default Memo
