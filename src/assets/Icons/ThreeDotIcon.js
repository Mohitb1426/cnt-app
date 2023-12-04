/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const ThreeDotIcon = ({ color = '#FFB804' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={5}
        height={21}
        fill="none"
    >
        <Path
            fill={color}
            d="M2.495 15.535a2.41 2.41 0 1 1 0 4.821 2.41 2.41 0 0 1 0-4.82Zm0-7.714a2.411 2.411 0 1 1 0 4.822 2.411 2.411 0 0 1 0-4.822Zm0-7.714a2.411 2.411 0 1 1 0 4.822 2.411 2.411 0 0 1 0-4.822Z"
        />
    </Svg>
)
const Memo = memo(ThreeDotIcon)
export default Memo
