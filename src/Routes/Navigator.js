import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, SplashScreenWindow, Detail } from '../screens/index'

export const Routes = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreenWindow} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
