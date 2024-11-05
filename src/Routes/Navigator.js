import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '../screens/Home/Home'
import { SplashScreenWindow } from '../screens/SplashScreen/index'

export const Routes = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreenWindow} />
        <Stack.Screen name='Home' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
