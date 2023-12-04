import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
import { ColorTheme } from '../../../common/AppStyles'
const BookmarkIconMArketPlace = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={15}
        fill="none"
    >
        <Path
            fill={ColorTheme.PRIMARY_BACKGROUND}
            d="M7.38.77a.692.692 0 0 1 1.241 0L10.6 4.779l4.424.647c.568.083.794.78.383 1.181l-3.2 3.118.754 4.404a.692.692 0 0 1-1.004.73L8 12.777l-3.957 2.08a.692.692 0 0 1-1.004-.73l.755-4.403-3.2-3.118a.692.692 0 0 1 .382-1.18l4.425-.648L7.38.771Z"
        />
    </Svg>
)
const Memo = memo(BookmarkIconMArketPlace)
export default Memo
