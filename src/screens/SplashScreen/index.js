import React from 'react'
import ImagemFundo from '../../../assets/Background.jpeg'
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from '../../components/Text/Text'
import PropTypes from 'prop-types'
import { ButtonContainer } from '../../components/NextButton/style'
import { NextButton } from '../../components/NextButton'

export const SplashScreenWindow = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home')
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground style={styles.ImageBackground} source={ImagemFundo} />
      <ButtonContainer>
        <NextButton label='' iconName='chevron-forward' onPress={handlePress} />
      </ButtonContainer>
      <View style={styles.box}>
        <Text size={50} lh={60}>
          EXPLORE
        </Text>
        <Text size={50} lh={60}>
          A BELEZA DA NATUREZA
        </Text>
      </View>
    </TouchableOpacity>
  )
}

SplashScreenWindow.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
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
