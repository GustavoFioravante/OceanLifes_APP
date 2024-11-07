import React from 'react'
import { HeaderContainer, HeaderImageBackground, HeaderGradient, ButtonsView } from './style'
import { colors } from '../../standart/colors'
import { IconButton } from '../IconButton/index'
import { Text } from '../Text/Text'
import { Tag } from '../Tagg'
import PropTypes from 'prop-types'

export const Header = ({ item }) => {
  const { imageURL, title, subtitle, type } = item || {}
  return (
    <HeaderContainer>
      <HeaderImageBackground source={imageURL}>
        <HeaderGradient colors={['transparent', 'transparent', colors.AliceBlue]}>
          <ButtonsView>
            <IconButton label='' iconName='list' />
            <IconButton label='' iconName='person-circle' />
          </ButtonsView>
          <Tag mt={215}>{type}</Tag>
          <Text fontFamily={'bold'} size={30} mt={14} ml={10} color={'violet'}>
            {title}
          </Text>
          <Text fontFamily={'boldRegular'} size={25} color={'white'} lh={25} ml={13} mt={5}>
            {subtitle}
          </Text>
        </HeaderGradient>
      </HeaderImageBackground>
    </HeaderContainer>
  )
}

Header.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    type: PropTypes.string,
  }),
}
