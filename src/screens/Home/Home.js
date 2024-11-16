import React from 'react'
import { HomeList, Header } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import FundoHeader from '../../../assets/FundoHeader.jpg'
import { WikiList } from '../../components/Index'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304099683710537769/GustavoADS.jpg?ex=672e28f9&is=672cd779&hm=36ec20205c009dd6406e26887a5dd81cafd80e3b743beb55071ba8e00e0f441e&',
    title: 'Programador e Gerente do Projeto',
    type: 'Bio',
    subtitle: 'Gustavo Fioravante',
    description:
      'Gustavo, o programador da equipe tem 21 anos e sonha em trabalhar como programador com perfil FullStack em Python.A deidicação é bem grande, pois ele estuda muito',
  },
  {
    id: 1,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355383382036/GabeADS.jpg?ex=672e25e0&is=672cd460&hm=10321e27149d62b934b34333c8dbac2af13590157b5ac9ee0afccec93908f8f5&',
    title: 'Gerente do Projeto e Coordenador',
    type: 'Bio',
    subtitle: 'Gabriel bla bla bla',
    description: ' null ',
  },
  {
    id: 2,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354976665680/SalatielADS.jpg?ex=672e25df&is=672cd45f&hm=d3c31a8aaae3b63ce2b3cc96e10887bc794753f9433043b89c1cf3e8c34bcd6a&',
    title: 'Coordenador e HeadLiner',
    type: 'Bio',
    subtitle: 'Salatiel bla bla bla',
    description: ' null ',
  },
  {
    id: 3,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355731374100/CarlosADS.jpg?ex=672e25e0&is=672cd460&hm=304768516087580e2fb69f47fcdeabaea65b6d1ee7950c367f90a7420239bf92&',
    title: 'Analista',
    type: 'Bio',
    subtitle: 'Carolos bla bla bla',
    description:
      'Bibliografia: Eu Carlos Eduardo Barreto Santos, fiquei responsável no projeto da prototipagem dos modelos canvas, tanto o model e o project, montei o BCG, a Swort, e também desenvolvi um pouco sobre a segurança do trafego e como deveria ser auditado. O meu desempenho no projeto foi destacado em planejar, montar e surgerir ideias que seria de acordo e que estaria compatível com a aplicação, se baseando e usando como ferramenta principal a ODS 14.',
  },
  {
    id: 4,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354553036850/LucasADS.jpg?ex=672e25df&is=672cd45f&hm=b753af9176487cf4d4e29bcc8ecc04c75d04211fd68ff1f62686cc6e9e65a300&',
    title: 'Analista',
    type: 'Bio',
    subtitle: 'Lucas bla bla bla',
    description: ' null ',
  },
]

const FAKE_DATA_ICONS = [
  {
    id: 5,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305994648954867812/icon1.png?ex=67350dcc&is=6733bc4c&hm=50fda704b316b70c5a1235471b2f0b6fa1fec7c586a4bcc0f6ff757921823408&',
    title: 'ICONE1',
    subtitle: '',
    description: 'null',
  },
  {
    id: 6,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982782580850698/icon2.png?ex=673502bf&is=6733b13f&hm=cfd4399c69074563eff428d193513c76b88fe73797a4ca039766542c8804c688&',
    title: 'ICONE2',
    subtitle: '',
    description: 'null',
  },
  {
    id: 7,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982782832644217/icon3.png?ex=673502bf&is=6733b13f&hm=5f94eb714660c0f2a3fe9364807f24fbc1f296caf41ccb6dcc1edc8df3ff3312&',
    title: 'ICONE3',
    subtitle: '',
    description: 'null',
  },
  {
    id: 8,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982783168057384/icon4.png?ex=673502bf&is=6733b13f&hm=6c50a6c1af756a25c7cc4ec3ea981fe01968edf01509f47cf2989f53af5b75a0&',
    title: '',
    subtitle: '',
    description: 'null',
  },
  {
    id: 9,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982783532957716/icon5.png?ex=673502bf&is=6733b13f&hm=19f10a9a7cf868722b8847621dab6bc5c9ff7aabfdaf4dd67be23fc24fcea504&',
    title: '',
    subtitle: '',
    description: 'null',
  },
  {
    id: 10,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982783939940383/icon6.png?ex=673502bf&is=6733b13f&hm=20cf6dd4b2c019e9db47c3b27254604d92d085abdb0de4df2a47cc71e0548057&',
    title: '',
    subtitle: '',
    description: 'null',
  },
  {
    id: 11,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982784216760390/icon7.png?ex=673502bf&is=6733b13f&hm=6a866a7913fd1953683a201cbbda5edf418e79edc6cfde4fecc00fd43556985e&',
    title: '',
    subtitle: '',
    description: 'null',
  },
  {
    id: 12,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982784699109386/icon8.png?ex=673502bf&is=6733b13f&hm=0544889c0cf3be736f76da92a05007c2c9d5c85bdbca4633acdbe8da874111fa&',
    title: '',
    subtitle: '',
    description: 'null',
  },
  {
    id: 13,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1305982784938049586/icon9.png?ex=673502bf&is=6733b13f&hm=027362f9ab1b183d87e27e3bd2fe36b3594b59efa1e67171c41c246afe583722&',
    title: '',
    subtitle: '',
    description: 'null',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Header
        item={{
          title: 'OceanLifes',
          subtitle: 'A vida na água importa!',
          type: 'Wiki',
          imageURL: FundoHeader,
        }}
      />

      <WikiList title='EXPLORAR' data={FAKE_DATA_ICONS} />
      <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
