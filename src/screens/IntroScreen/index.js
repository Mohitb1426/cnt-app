import React from 'react'
import styles from './style'
import Images from '../../common/Images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { CarouselComponent } from '../../components/CarouselComponent'

export function IntroScreen () {
  const data = [
    {
      id: 1,
      level: 'Cover English',
      language_id: 1,
      date: null,
      file_ext: 'jpg',
      cover_image: Images.INTRO_IMAGE,
      title: 'Find Community Friends',
      description: 'Find People and opportunities Everyone and Everywhere'

    },
    {
      id: 2,
      level: 'Cover English',
      language_id: 1,
      date: null,
      file_ext: 'jpg',
      cover_image: Images.INTRO_IMAGE_02,
      title: 'Like Comment and Share',
      description: 'A simply way to text, video chat and plan things all in one place'
    }
  ]
  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <CarouselComponent data={data} />
    </GestureHandlerRootView>
  )
}
