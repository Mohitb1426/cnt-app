/* eslint-disable react/prop-types */
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const SearchIcon = ({ color = '#1C2340' }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
  >
    <Path
      fill={color}
      d="M13.173 14a.831.831 0 0 1-.598-.257l-3.83-3.831-.003.002a5.373 5.373 0 0 1-3.221 1.063H5.5a5.5 5.5 0 0 1-3.882-1.624A5.5 5.5 0 0 1 0 5.468a5.472 5.472 0 0 1 1.59-3.873A5.476 5.476 0 0 1 5.436 0h.023a5.5 5.5 0 0 1 3.883 1.623 5.499 5.499 0 0 1 1.617 3.885A5.386 5.386 0 0 1 9.91 8.74l3.833 3.834a.826.826 0 0 1-.57 1.425ZM5.443 1.097a4.375 4.375 0 0 0-3.075 1.276 4.378 4.378 0 0 0-1.272 3.098A4.4 4.4 0 0 0 2.39 8.58a4.4 4.4 0 0 0 3.106 1.298h.017a4.38 4.38 0 0 0 3.08-1.277 4.375 4.375 0 0 0 1.271-3.097A4.399 4.399 0 0 0 8.57 2.396a4.398 4.398 0 0 0-3.106-1.298h-.02Z"
    />
  </Svg>
)
const Memo = memo(SearchIcon)
export default Memo
