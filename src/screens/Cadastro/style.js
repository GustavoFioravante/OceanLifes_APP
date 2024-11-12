import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const GoBackContainerr = styled.View`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(-52)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
  left: ${({ theme }) => theme.metrics.px(0)}px;
`

export const Overlay = styled.View`
  flex: 1;
  width: ${({ theme }) => theme.metrics.px(320)}px;
  height: ${({ theme }) => theme.metrics.px(435)}px;
  border-radius: ${({ theme }) => theme.metrics.px(20)}px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(380)}px;
  left: ${({ theme }) => theme.metrics.px(261)}px;
  transform: translate(-165px, -150px);
`

export const Title = styled.Text`
  font-family: 'AtkinsonHyperlegible_700Bold';
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  top: ${({ theme }) => theme.metrics.px(15)}px;
  margin-right: ${({ theme }) => theme.metrics.px(90)}px;
  color: white;
  position: absolute;
`

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
`

export const Icon = styled.View`
  padding-left: 8px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 5px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 12px;
  background-color: #2800a9;
  align-items: center;
  border-radius: 5px;
  margin: 0 5px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`

export const Message = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  color: white;
  text-align: center;
  position:;
`
