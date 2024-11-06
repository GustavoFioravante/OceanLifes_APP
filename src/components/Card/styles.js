import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(110)}px;
  height: ${({ theme }) => theme.metrics.px(98)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`
export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
