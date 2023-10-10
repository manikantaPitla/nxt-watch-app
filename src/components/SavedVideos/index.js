import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../Context/ThemeAndVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  Main,
  Flex,
  Content,
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const TitleBg = isDarkTheme ? ' #181818' : '#f1f1f1'

      return (
        <Main>
          <Header />
          <Flex>
            <NavigationBar />
            <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
              <SavedVideoTitle bgColor={TitleBg}>
                <SavedTitleIconContainer>
                  <CgPlayListAdd size={35} color="#ff0000" />
                </SavedTitleIconContainer>
                <SavedText color={textColor}>Saved Videos</SavedText>
              </SavedVideoTitle>
              {savedVideos.length > 0 ? (
                <Content>
                  <SavedVideoList>
                    {savedVideos.map(eachVideo => (
                      <TrendingVideoCard
                        key={eachVideo.id}
                        videoDetails={eachVideo}
                      />
                    ))}
                  </SavedVideoList>
                </Content>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote noteColor={noteColor}>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </SavedContainer>
          </Flex>
        </Main>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
