import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../../Services/stores/index'
import PropTypes from 'prop-types'

export const Card = ({ item }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.imageURL }} />
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
  }),
}
