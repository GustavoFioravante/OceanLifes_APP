import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(110)}px;
  height: ${({ theme }) => theme.metrics.px(98)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  justify-content: space-between;
  align-items: center;
`
export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const CardTitle = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  text-align: center;
  padding: 0 5px;
`
