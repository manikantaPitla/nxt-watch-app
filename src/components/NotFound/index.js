import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../Context/ThemeAndVideoContext'
import {
  Main,
  Flex,
  Content,
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <Main>
          <Header />
          <Flex>
            <NavigationBar />
            <NotFoundContainer bgColor={bgColor}>
              <Content>
                <NotFoundVideosView>
                  <NotFoundVideosImage
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    }
                    alt="not found"
                  />
                  <NotFoundVideosHeading headingColor={headingColor}>
                    Page Not Found
                  </NotFoundVideosHeading>
                  <NotFoundVideosNote noteColor={noteColor}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundVideosNote>
                </NotFoundVideosView>
              </Content>
            </NotFoundContainer>
          </Flex>
        </Main>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
