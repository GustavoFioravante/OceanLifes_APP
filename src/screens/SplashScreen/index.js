import React from 'react'
import ImagemFundo from '../../../assets/Background.jpeg'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text } from '../../components/Text/Text'
import { NextButton } from '../../components/NextButton'

export const SplashScreenWindow = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={ImagemFundo} />
      <NextButton destination='Home' />
      <View style={styles.box}>
        <Text size={50} lh={60}>
          EXPLORE
        </Text>
        <Text size={50} lh={60}>
          A BELEZA DA NATUREZA
        </Text>
      </View>
    </View>
  )
}

export default SplashScreenWindow

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    height: 1100,
    width: 500,
    right: 85,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    left: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    bottom: 452,
    right: 40,
  },
})
