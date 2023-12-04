import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const PhotoIcon = (props) => (
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
const Memo = memo(PhotoIcon)
export default Memo