/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../../common/AppStyles'
const PhoneIcon = ({ color = ColorTheme.PRIMARY_BACKGROUND_COLOR_01 }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
    >
        <Path
            fill={color}
            d="M21.388 18.918a2.5 2.5 0 0 1-2.734 2.5 20.285 20.285 0 0 1-8.844-3.146 19.994 19.994 0 0 1-6.152-6.15A20.297 20.297 0 0 1 .51 3.225 2.5 2.5 0 0 1 2.998.5h2.995a2.501 2.501 0 0 1 2.5 2.155c.123.922.348 1.828.673 2.7a2.501 2.501 0 0 1-.564 2.639l-.997.997a15.5 15.5 0 0 0 5.292 5.293l1-1a2.5 2.5 0 0 1 2.636-.562c.872.325 1.778.55 2.705.673a2.5 2.5 0 0 1 2.15 2.531v2.992Z"
        />
    </Svg>
)
const Memo = memo(PhoneIcon)
export default Memo
