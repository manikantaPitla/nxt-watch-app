import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import TrendingCard from '../TrendingCard'
import {
  TrendingContainer,
  EmptyContainer,
  Title,
  Flex,
  MainContainer,
  Text,
} from './styledComponents'

const renderSavedVideos = (savedVideos, isDark) => {
  if (savedVideos.length === 0) {
    return (
      <EmptyContainer isDark={isDark}>
        <img
          alt="no saved videos"
          width="250px"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        />
        <Title isDark={isDark}>No saved videos found</Title>
        <Text isDark={isDark}>Save your videos by clicking a button</Text>
      </EmptyContainer>
    )
  }
  return (
    <TrendingContainer isDark={isDark}>
      <Title isDark={isDark}>Saved Videos</Title>
      {savedVideos.map(each => (
        <TrendingCard trendingItem={each} key={each.id} />
      ))}
    </TrendingContainer>
  )
}

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value
      return (
        <MainContainer data-testid="savedVideos" isDark={isDark}>
          <Header />
          <Flex>
            <SideBar />
            {renderSavedVideos(savedVideos, isDark)}
          </Flex>
        </MainContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
