import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../Card'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://w7.pngwing.com/pngs/62/708/png-transparent-disney-nemo-illustration-finding-nemo-marlin-pixar-nemo-miscellaneous-seafood-orange-thumbnail.png',
  },
  {
    id: 1,
    image_url:
      'https://static.wikia.nocookie.net/disney/images/3/36/Profile_-_Dory.png/revision/latest?cb=20240301044057&path-prefix=pt-br',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
