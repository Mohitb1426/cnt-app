import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const MicIcon = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={19}
        fill="none"
    >
        <Path
            fill="#1C2340"
            d="M8.75 19h-5.5a.75.75 0 0 1 0-1.5h2v-1.55A6.012 6.012 0 0 1 0 10V7.25a.751.751 0 0 1 1.5 0V10c0 2.481 2.019 4.5 4.5 4.5 2.482 0 4.5-2.019 4.5-4.5V7.25a.751.751 0 0 1 1.5 0V10a6.01 6.01 0 0 1-5.25 5.95v1.55h2a.751.751 0 0 1 0 1.5ZM6 13c-1.654 0-3-1.346-3-3V3c0-1.654 1.346-3 3-3s3 1.346 3 3v7c0 1.654-1.346 3-3 3Z"
        />
    </Svg>
)
const Memo = memo(MicIcon)
export default Memo
