import React from "react";
import ImagemFundo from '../../../assets/Background.jpeg'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Text } from "../../components/Text/Text";
import { LogoStyle } from '../../components/Logo/LogoStyle'

export const SplashScreenWindow = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground}source={ImagemFundo}/>
            <View style={styles.box}>
              <Text>EXPLORE</Text>
             <Text>A BELEZA DA NATUREZA</Text>
            </View>
          <LogoStyle/>
        <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    height:1100,
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
})