import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SvgComponent = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M14.28 3a2 2 0 0 1 1.897 1.368L16.72 6H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.28l.543-1.632A2 2 0 0 1 9.721 3h4.558Zm0 2H9.72l-.543 1.632A2 2 0 0 1 7.279 8H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2.28a2 2 0 0 1-1.897-1.368L14.28 5ZM9.5 12.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM12 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      clipRule="evenodd"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
