import React from 'react'
import { Header, GoBackButton } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import { useDataStore } from '../../Services/stores/index'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Header item={selectedData} onDetail />
      <GoBackButton />
    </ScreenScrollContainer>
  )
}
