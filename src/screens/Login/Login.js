import React, { useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import FundoImage from '../../../assets/Background.jpeg'

import {
  Container,
  Title,
  InputContainer,
  InputField,
  Icon,
  Button,
  ButtonText,
  Message,
  Overlay,
  ButtonContainer,
} from './style'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      setMessage('Login bem-sucedido')
      navigation.navigate('Home')
    } else {
      setMessage('Usuário ou senha inválidos!')
    }
  }

  const goToCadastro = () => {
    navigation.navigate('Cadastro') // Navegar para a tela de cadastro
  }

  return (
    <ImageBackground style={styles.ImageBackground} source={FundoImage}>
      <Overlay>
        <Container>
          <Title>Login</Title>

          <InputContainer>
            <InputField
              placeholder='Email'
              value={username}
              onChangeText={setUsername}
              autoCapitalize='none'
            />
            <Icon>
              <Ionicons name='person' size={24} color='gray' />
            </Icon>
          </InputContainer>

          <InputContainer>
            <InputField
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon>
              <Ionicons name='lock-closed' size={24} color='gray' />
            </Icon>
          </InputContainer>

          <TouchableOpacity onPress={handleSubmit}>
            <ButtonContainer>
              <Button onPress={handleSubmit}>
                <ButtonText>Entrar</ButtonText>
              </Button>
              <Button onPress={goToCadastro}>
                <ButtonText>Cadastre-se</ButtonText>
              </Button>
            </ButtonContainer>
          </TouchableOpacity>

          {message ? <Message>{message}</Message> : null}
        </Container>
      </Overlay>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    height: 1100,
    width: 500,
    right: 85,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default Login
