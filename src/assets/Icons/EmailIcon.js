import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const EmailIcon = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={12}
        fill="none"
    >
        <Path
            fill="#242A37"
            d="M14 2H2l6 5 6-5ZM0 2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2Z"
        />
    </Svg>
)
const Memo = memo(EmailIcon)
export default Memo
