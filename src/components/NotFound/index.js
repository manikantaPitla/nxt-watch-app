import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {
  TrendingContainer,
  MainContainer,
  Flex,
  Image,
  Text,
  Heading,
} from './styledComponents'

const NotFound = () => (
  <MainContainer>
    <Header />
    <Flex>
      <SideBar />
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer isDark={isDark}>
              <Image
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <Heading isDark={isDark}>Page Not Found</Heading>
              <Text isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </Text>
            </TrendingContainer>
          )
        }}
      </AppContext.Consumer>
    </Flex>
  </MainContainer>
)

export default NotFound
