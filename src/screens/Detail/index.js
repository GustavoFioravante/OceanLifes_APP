import React, { useState } from 'react'
import { Header, GoBackButton } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import { useDataStore } from '../../Services/stores/index'
import { TextContainer, ToggleButton } from './style'
import articles from '../../Services/stores/Articles'
import { marked } from 'marked'
import RenderHtml from 'react-native-render-html'
import { theme } from '../../standart/theme'
import { Text } from './style'

export const Detail = () => {
  const { selectedData } = useDataStore() // Recuperando o selectedData da store
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  const article = articles.find((item) => item.id === selectedData.id) || {}

  const truncatedContent =
    article.content && article.content.length > 150
      ? article.content.substring(0, 150) + '...'
      : article.content

  const contentToRender = expanded ? article.content : truncatedContent
  const contentHTML = contentToRender ? marked(contentToRender) : ''

  return (
    <ScreenScrollContainer>
      <Header item={selectedData} onDetail />

      <TextContainer>
        {article.title && <Text>{article.title}</Text>}
        {contentToRender && (
          <>
            <RenderHtml
              contentWidth={300}
              color={theme.colors.white}
              source={{ html: contentHTML }}
              tagsStyles={{
                p: { color: theme.colors.white, fontSize: 18 },
                h1: { color: theme.colors.white },
                h2: { color: theme.colors.white },
              }}
            />
            <ToggleButton onPress={toggleExpanded}>
              {expanded ? 'Mostrar menos' : 'Mostrar mais'}
            </ToggleButton>
          </>
        )}
      </TextContainer>
      <GoBackButton />
    </ScreenScrollContainer>
  )
}
