import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer } from './style'
import { Text } from '../Text/Text'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../standart/theme'
import { TouchableOpacity } from 'react-native'

export const NextButton = ({ iconName, onPress, label }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonContainer>
      <Ionicons name={iconName} size={theme.metrics.px(35)} color={'white'} />
      {label ? (
        <Text fontFamily={'regular'} size={10} mt={6}>
          {label}
        </Text>
      ) : null}
    </ButtonContainer>
  </TouchableOpacity>
)

NextButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func, // Torna `onPress` opcional
}
