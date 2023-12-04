/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SendIcon = ({ color = '#000000' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={21}
        fill="none"
    >
        <Path
            fill={color}
            d="M5.614 8.982a1 1 0 0 1-.61-.41l-4.822-7C-.398.732.51-.335 1.434.103l19 9a1 1 0 0 1 0 1.807l-19 9c-.924.438-1.831-.629-1.252-1.47l4.821-7a1 1 0 0 1 .611-.41l4.695-1.024-4.695-1.023Z"
        />
    </Svg>
)
const Memo = memo(SendIcon)
export default Memo
