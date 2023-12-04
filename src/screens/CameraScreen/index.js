import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import {
  Linking, View, Image, StyleSheet
} from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import Images from '../../common/Images'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function CameraPermissionsScreen () {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('not-determined')
  const [cameraPosition, setCameraPosition] = useState('back')
  const [isCameraInitialized, setIsCameraInitialized] = useState(false)

  const devices = useCameraDevices('wide-angle-camera')
  const device = devices[cameraPosition]
  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission()
    console.log(permission, 'permission')
    if (permission === 'denied') await Linking.openSettings()
    setCameraPermissionStatus(permission)
  }, [])
  const camera = useRef(null)

  useEffect(() => {
    requestCameraPermission()
  }, [])

  const flipCamera = () => {
    if (cameraPosition === 'back') {
      setCameraPosition('front')
    } else {
      setCameraPosition('back')
    }
  }

  const onMediaCaptured = (media, type) => {
    console.log(`Media captured! ${JSON.stringify(media)} type ${type}`)
  }

  const takePhotoOptions = useMemo(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: 'off',
      quality: 90,
      skipMetadata: true
    }),
    []
  )

  const takePhoto = async () => {
    console.log('camera.current========>', camera.current)
    try {
      if (camera.current == null) throw new Error('Camera ref is null!')
      console.log('Taking photo...')
      const photo = await camera.current.takePhoto(takePhotoOptions)
      onMediaCaptured(photo, 'photo')
    } catch (e) {
      console.error('Failed to take photo!', e)
    }
  }

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!')
    setIsCameraInitialized(true)
  }, [])

  return (
    <View style={styles.container}>
      {(cameraPermissionStatus === 'authorized')
        ? (
          <View style={styles.container}>
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              orientation="portrait"
              photo={true}
              enableZoomGesture={true}
              onInitialized={onInitialized}
            />
            <View style={styles.subContainer}>
              <View style={styles.buttonContainer}>
                {/* <TouchableOpacity onPress={takePhoto} disabled={!(isCameraInitialized)}>
                  <Image source={Images.CAMERA_ICON} style={styles.imageStyle} resizeMode="contain" />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={flipCamera}>
                  <Image source={Images.CAMERA_ICON} style={styles.imageStyle} resizeMode="contain" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          )
        : null}
    </View>
  )
}
