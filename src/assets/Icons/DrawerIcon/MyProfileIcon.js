import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const MyProfileIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h20v20H0z" />
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
const Memo = memo(MyProfileIcon)
export default Memo