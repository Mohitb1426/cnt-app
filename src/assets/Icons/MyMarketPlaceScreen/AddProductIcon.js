import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const AddProductIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={16}
    height={16}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h16v16H0z" />
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
const Memo = memo(AddProductIcon)
export default Memo