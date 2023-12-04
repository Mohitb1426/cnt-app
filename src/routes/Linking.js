import { Routes } from './Routes'

const config = {
  screens: {
    DrawerStack: {
      screens: {
        BottomTabStack: {
          screens: {
            Home: 'home',
            Tweet: 'tweet',
            Reels: 'reels',
            Profile: 'profile'
          }
        }
      }
    },
    // tnspc://Support/1111/222
    // for this above url 1111 will be stored in id and 222 will be stored in id2
    // Support: `${Routes.SCREEN_SUPPORT}/:id/:id2`,
    ImagePreview: `${Routes.IMAGE_PREVIEW}/:id`
  }
}

const linking = {
  prefixes: ['clickntokk://', 'https://*.clickntokk.com'],
  config
}
export default linking
