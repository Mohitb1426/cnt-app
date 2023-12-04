import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const MenuBarIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={23}
    height={23}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h23v23H0z" />
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
const Memo = memo(MenuBarIcon)
export default Memo
