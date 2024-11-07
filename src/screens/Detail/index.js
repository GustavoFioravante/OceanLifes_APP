import React from 'react'
import { ScreenScrollContainer } from '../../components/Container'
import { Header } from '../../components/Header'
import { useDataStore } from '../../Services/stores/index'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Header item={selectedData} />
    </ScreenScrollContainer>
  )
}
