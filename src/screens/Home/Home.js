import React from 'react'
import { HomeList, Header } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import FundoHeader from '../../../assets/FundoHeader.jpg'

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
      <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
      <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
