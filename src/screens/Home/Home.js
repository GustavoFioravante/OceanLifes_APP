import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeList, Header } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import FundoHeader from '../../../assets/FundoHeader.jpg'
import { WikiList } from '../../components/Index'
import { ContainerText, Text, TitleText } from './styles'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304099683710537769/GustavoADS.jpg?ex=672e28f9&is=672cd779&hm=36ec20205c009dd6406e26887a5dd81cafd80e3b743beb55071ba8e00e0f441e&',
    title: 'Programador e Gerente do Projeto',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gustavo Fioravante',
  },
  {
    id: 1,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355383382036/GabeADS.jpg?ex=672e25e0&is=672cd460&hm=10321e27149d62b934b34333c8dbac2af13590157b5ac9ee0afccec93908f8f5&',
    title: 'Gerente do Projeto e Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gabriel Santana Leite',
  },
  {
    id: 2,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354976665680/SalatielADS.jpg?ex=672e25df&is=672cd45f&hm=d3c31a8aaae3b63ce2b3cc96e10887bc794753f9433043b89c1cf3e8c34bcd6a&',
    title: 'Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Salatiel Simião de Oliveira',
  },
  {
    id: 3,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355731374100/CarlosADS.jpg?ex=672e25e0&is=672cd460&hm=304768516087580e2fb69f47fcdeabaea65b6d1ee7950c367f90a7420239bf92&',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Carlos Eduardo Barreto Santos',
  },
  {
    id: 4,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354553036850/LucasADS.jpg?ex=672e25df&is=672cd45f&hm=b753af9176487cf4d4e29bcc8ecc04c75d04211fd68ff1f62686cc6e9e65a300&',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Lucas Emídio Romeiro',
  },
  {
    id: 14,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307487373294305351/LeoADS.jpg?ex=673a7c01&is=67392a81&hm=ab709b414e39f202487aaedaef7075d316d7d85c6f558b82d67a1ce6d8ea8597&',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Leonardo Araujo Silva',
  },
]

const FAKE_DATA_ICONS = [
  {
    id: 5,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624965177364/poluicao-marinha-325737683.jpg?ex=673abc80&is=67396b00&hm=f052886e319499de9557daef382731b7e74ed9665cb35b7a9b6629d764420647&',
    title: 'Combatendo a Poluição Marinha',
    showTag: false,
  },
  {
    id: 6,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556626588499988/trafico.jpg?ex=673abc81&is=67396b01&hm=57ba5216635500bbf0913ea0d62b43baedb6a696aee82b9ff1ccc5bcfca604a5&',
    title: 'Tráfico Ilegal de Espécies Marinhas',
    description: 'null',
    showTag: false,
  },
  {
    id: 7,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624516255794/pescapredatorio.jpg?ex=673abc80&is=67396b00&hm=17146ab00a2f0cb1301a0e98f6204a69580aa3f53f901c69a1ed39e0c8bddc27&',
    title: 'Ameaça da Pesca Predatória',
    description: 'null',
    showTag: false,
  },
  {
    id: 8,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556625980194826/recifesecorais.jpg?ex=673abc80&is=67396b00&hm=1f4341f28a476467e64696c5b6b7937b75fd8ae1aa7e88077c3a8f9b50e2d65f&',
    title: 'Destruição dos Recifes de Corais',
    description: 'null',
    showTag: false,
  },
  {
    id: 9,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556626349166602/sobrepesca-Chilean_purse_seine-C.-Ortiz-Rojas.jpg?ex=673abc80&is=67396b00&hm=0d9250f747e9bfd1551c66c402d3944db82db2f64eda9f7e2ab0e53cb818946c&',
    title: 'Sobrepesca de Espécies',
    description: 'null',
    showTag: false,
  },
  {
    id: 10,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556625556701304/poluicaoquimicanosoceanos.jpg?ex=673abc80&is=67396b00&hm=03476cb628f795ff4ea4bee9dcfad1a475348fea88b606c200e478466425f2c4&',
    title: 'Poluição Química nos Oceanos ',
    description: 'null',
    showTag: false,
  },
  {
    id: 11,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307558482047664158/poluicaodeplastico.jpg?ex=673abe3b&is=67396cbb&hm=924b93e6d5a3c623b0e2997b87969683eb19937999da4a4c0ce5c668b3783c6d&',
    title: 'Poluição por Plástico',
    description: 'null',
    showTag: false,
  },
  {
    id: 12,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556623627063368/exploracaomineralsubmarina.jpg?ex=673abc80&is=67396b00&hm=7815b9788e29a0c7955de89033737bfbe4df68985485b476e1559a512f847aa6&',
    title: 'Exploração Mineral Submarina',
    description: 'null',
    showTag: false,
  },
  {
    id: 13,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624130637864/Mudancas-climaticas-por-que-esta-mais-preocupante-scaled-1.jpg?ex=673abc80&is=67396b00&hm=27446a8abb7bb35e1007c7e5742774f04cdadc128daa6c96e5e6edcf4995f30a&',
    title: 'Mudanças Climáticas',
    description: 'null',
    showTag: false,
  },
]

export const Home = () => {
  const navigation = useNavigation()

  const handleIconPress = (id) => {
    navigation.navigate('Detail', { articleId: id })
  }

  return (
    <ScreenScrollContainer>
      <Header
        item={{
          title: 'OceanLifes',
          subtitle: 'A vida na água importa!',
          showTag: true,
          type: 'Wiki',
          imageURL: FundoHeader,
        }}
      />

      <WikiList
        title='EXPLORAR'
        data={FAKE_DATA_ICONS}
        onPressItem={(item) => handleIconPress(item.id)}
      />

      <ContainerText>
        <TitleText>Quem nós somos?</TitleText>
        <Text>
          Somos uma microempresa iniciando no ramo de Saas. Nosso primeiro projeto está destinado
          para um movimento de conscientização sobre cuidados a vida marinha e vida sustentável para
          podermos incentivar futuras gerações a como coexistir com ecossistemas marinhos e
          preservar o atual catalogo de espécies. este projeto se destina a publico de todas as
          idades que desejam aprender mais sobre como preservar a flora marítima e sendo um projeto
          teoricamente *Opensource* (Opensource significa código aberto, em português. Quer dizer
          que uma aplicação tem seu código aberto e disponível para qualquer pessoa que pretende
          modificar e até redistribuir o software. Contudo, há restrições importantes quanto a como
          isso pode ser feito, o que visa a estabelecer certo controle e ordem.) nossos lucros veem
          através de doações, contribuições e anúncios á fim de aumentarmos o publico alvo e
          começamos a criar workshops sobre o assunto.
        </Text>

        <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
      </ContainerText>
    </ScreenScrollContainer>
  )
}
