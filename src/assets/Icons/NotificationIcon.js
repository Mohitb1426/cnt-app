/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const NotificationIcon = ({ isWhiteIcon }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
  >
    <Path
      fill={ isWhiteIcon ?? '#FFFFFF'}
      d="M9.563 21.522c1.698 0 2.627-1.201 2.627-2.894H6.93c0 1.693.929 2.894 2.632 2.894ZM17.71 16.409c-.84-1.109-2.495-1.758-2.495-6.722 0-5.095-2.25-7.142-4.347-7.634-.196-.049-.338-.114-.338-.322v-.158c0-.732-.6-1.35-1.332-1.344-.732-.01-1.333.612-1.333 1.344v.158c0 .202-.142.273-.338.322-2.103.497-4.347 2.54-4.347 7.634 0 4.963-1.654 5.608-2.495 6.722-.54.715-.027 1.736.868 1.736h15.295c.89 0 1.403-1.026.862-1.736Z"
    />
  </Svg>
)
const Memo = memo(NotificationIcon)
export default Memo
