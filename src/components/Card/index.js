import React from 'react'
import { CardContainer, CardImage, CardTitle } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../../Services/stores/index'
import PropTypes from 'prop-types'

export const Card = ({ item, showTitle }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.imageURL }} />
      {showTitle && <CardTitle>{item.title}</CardTitle>}
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string, // Adicionando validação do título
  }),
  showTitle: PropTypes.bool, // Nova prop para controlar a exibição do título
}

Card.defaultProps = {
  showTitle: false, // Default é false, ou seja, título não é exibido por padrão
}
