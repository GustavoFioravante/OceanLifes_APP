import React from 'react'
import { HomeList, Header } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1303576106628284446/1730867139943.jpg?ex=672c415b&is=672aefdb&hm=9eb04ef9e04f5af58d29c8790874cff7dd511e148ce62b08cfb2ece3d2bf3fed&',
    title: 'Programador',
    subtitle: 'Gustavo Fioravante',
    description:
      'Gustavo, o programador da equipe tem 21 anos e sonha em trabalhar como programador com perfil FullStack em Python.A deidicação é bem grande, pois ele estuda muito',
  },
  {
    id: 1,
    image_url:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1303576140857737246/IMG_20241106_012425.jpg?ex=672c4163&is=672aefe3&hm=2a787b600fb17dd02763695f6754c598cf2275f797f68f28e772681576b3ecd5&',
  },
  {
    id: 2,
    image_url:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1303576141101269073/IMG_20241106_012348.jpg?ex=672c4163&is=672aefe3&hm=938b97b6128c7eaacc358c25fe838e9f6d3f26c82f8adebb5f39d90c5c2473f1&',
  },
  {
    id: 3,
    image_url:
      'https://static.wikia.nocookie.net/disney/images/3/36/Profile_-_Dory.png/revision/latest?cb=20240301044057&path-prefix=pt-br',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Header />
      <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
      <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
