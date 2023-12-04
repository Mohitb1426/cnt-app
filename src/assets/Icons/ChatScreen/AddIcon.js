/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const AddIcon = ({ color = '#000000' }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
    >
        <Path
            fill={color}
            d="M7.5 16v-5.5H2a1.5 1.5 0 1 1 0-3h5.5V2a1.5 1.5 0 1 1 3 0v5.5H16a1.5 1.5 0 1 1 0 3h-5.5V16a1.5 1.5 0 1 1-3 0Z"
        />
    </Svg>
)
const Memo = memo(AddIcon)
export default Memo
