/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { memo } from 'react'
const LikeIcon = ({ color = '#FFFFFF' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={32}
        height={32}
        fill={color}
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
const Memo = memo(LikeIcon)
export default Memo
