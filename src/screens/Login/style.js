import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
export const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.View`
  flex: 1;
  width: 350px;
  height: 325px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-65px, -150px);
`

export const Title = styled.Text`
  font-family: 'AtkinsonHyperlegible_700Bold';
  font-size: 30px;
  margin-bottom: 25px;
  margin-right: 200px;
  color: white;
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
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
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
`
