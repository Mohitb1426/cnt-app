import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import { memo } from 'react'
const SvgComponent = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#075E54"
        fillRule="evenodd"
        d="M14.36 2.126a3.583 3.583 0 0 0-4.718 0L3.28 7.691a4.538 4.538 0 0 0-1.55 3.416v8.06a3.583 3.583 0 0 0 3.583 3.583h13.375a3.583 3.583 0 0 0 3.583-3.583v-8.06a4.538 4.538 0 0 0-1.55-3.416l-6.362-5.565ZM10 16.114a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M1.73 22.75V1.24h20.541v21.51z" />
      </ClipPath>
    </Defs>
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
