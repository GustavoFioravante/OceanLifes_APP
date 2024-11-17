import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, SplashScreenWindow, Detail, Login, Cadastro, userProfile } from '../screens/index'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// Stack Navigator com as telas principais
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={SplashScreenWindow} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  )
}

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Menu' component={StackNavigator} />
      <Drawer.Screen name='Perfil' component={userProfile} />
    </Drawer.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
