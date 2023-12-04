import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */
import { memo } from 'react'
const SvgComponent = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={20}
    height={20}
    viewBox="0 0 512 512"
  >
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M203.882 152.104c5.826 0 10.553-4.726 10.553-10.553 0-5.834-4.726-10.56-10.553-10.56s-10.553 4.726-10.553 10.56c0 5.827 4.726 10.553 10.553 10.553zM308.125 152.104c5.826 0 10.545-4.726 10.545-10.553 0-5.834-4.719-10.56-10.545-10.56-5.834 0-10.56 4.726-10.56 10.56-.001 5.827 4.726 10.553 10.56 10.553z"
        className="st0"
      />
      <Path
        d="M381.027 208.774c29.251-62.881 10.774-110.69-17.442-149.142C374.041 45.564 366.833 0 366.833 0s-80.442 49.441-112.004 49.582C223.274 49.715 142.404.976 142.404.976s-6.816 45.623 3.766 59.594c-27.885 38.704-45.948 86.674-16.143 149.297-42.809 59.247-68.22 159.015 34.31 250.852 9.275 11.04 22.184 9.135 25.825-3.795 0 0 .236 55.363 66.676 55.075 66.441-.296 66.204-55.652 66.204-55.652 3.744 12.894 16.675 14.688 25.854 3.575 101.717-92.724 75.449-192.277 32.131-251.148zm-72.902-108.747c22.929 0 41.524 18.587 41.524 41.524s-18.595 41.524-41.524 41.524c-22.937 0-41.532-18.587-41.532-41.524s18.595-41.524 41.532-41.524zm-104.243 0c22.937 0 41.524 18.587 41.524 41.524s-18.588 41.524-41.524 41.524-41.524-18.587-41.524-41.524c-.001-22.937 18.587-41.524 41.524-41.524zm-44.648 285.294c12.074-21.394 18.395-51.228 18.366-80.021.015-22.405-3.788-44.19-11.077-60.791h.008l11.077-4.844c8.168 18.698 12.082 41.879 12.088 65.636-.022 30.528-6.476 61.988-19.917 85.958l-10.545-5.938zm84.82 51.73a7.388 7.388 0 0 1-7.385-7.384c-.036-3.02-.819-4.785-2.082-6.469-1.27-1.647-3.249-3.116-5.539-4.246-3.301-1.662-7.066-2.459-8.986-2.777v21.135a7.377 7.377 0 0 1-7.385 7.378 7.375 7.375 0 0 1-7.377-7.378v-21.127a31.37 31.37 0 0 0-2.438.472c-2.326.539-5.346 1.528-7.842 2.991-1.683.975-3.109 2.126-4.128 3.397-1.336 1.728-2.164 3.508-2.208 6.624 0 4.076-3.301 7.384-7.377 7.384a7.387 7.387 0 0 1-7.385-7.384c-.037-6.344 2.208-11.912 5.48-15.9 3.264-4.025 7.303-6.609 11.07-8.389 7.539-3.5 14.326-4.018 14.806-4.091l.318-.023h14.178l.303.023c.266.03 2.541.228 5.804 1.004 3.279.775 7.554 2.097 11.867 4.586 2.858 1.662 5.76 3.87 8.204 6.89 3.272 3.988 5.524 9.556 5.48 15.9 0 4.075-3.301 7.384-7.378 7.384zm11.949-236.747-21.142-12.923s8.219-11.742 21.142-12.916c12.916 1.174 21.142 12.916 21.142 12.916l-21.142 12.923zm78.175 236.747a7.38 7.38 0 0 1-7.378-7.384c-.037-3.02-.827-4.785-2.082-6.469-1.27-1.647-3.249-3.116-5.538-4.246-3.301-1.662-7.075-2.459-8.987-2.777v21.135c0 4.077-3.308 7.378-7.385 7.378a7.38 7.38 0 0 1-7.384-7.378v-21.127a32.67 32.67 0 0 0-2.437.472c-2.318.539-5.339 1.528-7.842 2.991-1.676.975-3.102 2.126-4.12 3.397-1.345 1.728-2.164 3.508-2.208 6.624a7.382 7.382 0 1 1-14.763 0c-.044-6.344 2.208-11.912 5.48-15.9 3.264-4.025 7.303-6.609 11.062-8.389 7.548-3.5 14.334-4.018 14.814-4.091l.303-.023h14.185l.303.023c.266.03 2.54.228 5.812 1.004 3.272.775 7.555 2.097 11.868 4.586 2.865 1.662 5.76 3.87 8.204 6.89 3.272 3.988 5.516 9.556 5.48 15.9a7.392 7.392 0 0 1-7.387 7.384zm8.034-45.793c-13.44-23.971-19.894-55.43-19.924-85.958.015-23.757 3.928-46.937 12.088-65.636h.008l11.078 4.844c-7.281 16.601-11.085 38.386-11.07 60.791-.03 28.793 6.292 58.627 18.366 80.021l-10.546 5.938z"
        className="st0"
      />
    </G>
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
