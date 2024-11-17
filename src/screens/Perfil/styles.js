import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f7;
  padding: 40px;
  margin-top: 80px;
`

export const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 15px;
`

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

export const UserEmail = styled.Text`
  font-size: 18px;
  color: #777;
  margin-top: 5px;
`

export const InfoSection = styled.View`
  margin-top: 20px;
`

export const InfoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`

export const InfoText = styled.Text`
  font-size: 16px;
  color: #555;
`

export const ButtonsView = styled.View`
  position: flex;
  top: 65px;
  margin-left: 10px;
  right: 172px;
  z-index: 1;
`
