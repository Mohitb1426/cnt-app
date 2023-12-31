import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const ChatIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h32v32H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00781)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={128}
        height={128}
      />
    </Defs>
  </Svg>
)
const Memo = memo(ChatIcon)
export default Memo
