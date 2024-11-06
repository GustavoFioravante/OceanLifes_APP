import React from 'react'
import { HeaderContainer, HeaderImageBackground, HeaderGradient, ButtonsView } from './style'
import FundoHeader from '../../../assets/FundoHeader.jpg'
import { colors } from '../../standart/colors'
import { IconButton } from '../IconButton/index'
import { Text } from '../Text/Text'
import { Tag } from '../Tagg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImageBackground source={FundoHeader}>
        <HeaderGradient colors={['transparent', 'transparent', colors.AliceBlue]}>
          <ButtonsView>
            <IconButton label='' iconName='list' />
            <IconButton label='' iconName='person-circle' />
          </ButtonsView>
          <Tag mt={215}>Wiki</Tag>
          <Text fontFamily={'bold'} size={30} mt={14} ml={10} color={'violet'}>
            OceanLifes
          </Text>
          <Text fontFamily={'boldRegular'} size={25} color={'white'} lh={25} ml={13} mt={5}>
            A vida na água importa!
          </Text>
        </HeaderGradient>
      </HeaderImageBackground>
    </HeaderContainer>
  )
}
