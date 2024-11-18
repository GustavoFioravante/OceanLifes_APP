import styled from 'styled-components/native'

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  margin-left: ${({ theme }) => theme.metrics.px(10)}px;
  margin-right: ${({ theme }) => theme.metrics.px(10)}px;
  font-family: 'SourceSansPro_600SemiBold';
  color: white;
  line-height: ${({ theme }) => theme.metrics.px(38)}px;
`

export const TextContainer = styled.View`
  background-color: #1e1782;
  padding: ${({ theme }) => theme.metrics.px(15)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  margin: ${({ theme }) => theme.metrics.px(20, 15)}px;
`
export const ToggleButton = styled.Text`
  color: #007bff;
  margin-top: ${({ theme }) => theme.metrics.px(10)}px;
  font-weight: bold;
  text-align: right;
`
