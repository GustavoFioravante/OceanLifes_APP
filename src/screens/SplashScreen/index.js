import React from "react";
import ImagemFundo from '../../../assets/Background.jpeg'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Text } from "../../components/Text/Text";
import { LogoStyle } from '../../components/Images/LogoStyle'

export const SplashScreen = () => {
  return (
    <ImageBackground style={styles.ImageBackground}source={ImagemFundo}>
      <View style={styles.container}>
        <Text>Explore a beleza da Natureza</Text>
        <LogoStyle/>
        <StatusBar style="auto"/>
      </View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})