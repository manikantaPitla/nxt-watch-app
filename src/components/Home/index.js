import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {
  FailureImage,
  FailureContainer,
  FailureTitle,
  FailureText,
  RetryBtn,
  Container,
  VideoContainer,
  Videos,
  Flex,
  SearchInputContainer,
  DataContainer,
  Loading,
  Image,
  Banner,
  Content,
  Cross,
  Logo,
  Btn,
  Input,
  SearchBtn,
  Icon,
  DataWrapper,
} from './styledComponents'

class Home extends Component {
  state = {
    phase: '',
    dataList: [],
    searchValue: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchValue} = this.state
    this.setState({
      phase: 'loading',
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchValue}`,
        options,
      )
      const data = await response.json()
      if (response.ok === true) {
        const {videos} = data
        const formattedData = videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        this.setState({
          phase: 'success',
          dataList: formattedData,
        })
      } else {
        this.setState({
          phase: 'failure',
        })
      }
    } catch (e) {
      console.log(e)
      this.setState({
        phase: 'failure',
      })
    }
  }

  keyDown = event => {
    if (event.key === 'Enter') {
      this.setState(
        {
          searchValue: event.target.value,
        },
        this.getData,
      )
    }
  }

  closeBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderData = isDark => {
    const {phase} = this.state
    switch (phase) {
      case 'success':
        return this.renderSuccess(isDark)
      case 'failure':
        return this.renderFailure(isDark)
      case 'loading':
        return this.renderLoading(isDark)
      default:
        return null
    }
  }

  renderSuccess = () => {
    const {dataList} = this.state
    dataList.shift()
    if (dataList.length === 0) {
      return (
        <FailureContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureTitle>No search results found</FailureTitle>
          <FailureText>
            Try different key words or remove search filter
          </FailureText>
          <button onClick={this.getData} type="button">
            Retry
          </button>
        </FailureContainer>
      )
    }
    return (
      <Videos>
        {dataList.map(each => (
          <VideoCard key={each.id} videoItem={each} />
        ))}
      </Videos>
    )
  }

  renderFailure = isDark => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureTitle isDark={isDark}>Oops! Something went wrong</FailureTitle>
      <FailureText isDark={isDark}>
        We are having some trouble to complete your request. Please try again
      </FailureText>
      <RetryBtn onClick={this.getData} type="button" isDark={isDark}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  renderLoading = isDark => (
    <Loading isDark={isDark} data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </Loading>
  )

  searchVal = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    const {searchValue, showBanner} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Container data-testid="home" isDark={isDark}>
              <Header />
              <Flex>
                <SideBar />
                <VideoContainer>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <Content>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p>Buy Nxt Watch Premium prepaid plans</p>
                        <Btn>GET IT NOW</Btn>
                      </Content>
                      <Cross onClick={this.closeBanner} data-testid="close">
                        <AiOutlineClose />
                      </Cross>
                    </Banner>
                  )}
                  <DataContainer>
                    <SearchInputContainer>
                      <Input
                        type="search"
                        value={searchValue}
                        onChange={this.searchVal}
                        onKeyDown={this.keyDown}
                        placeholder="Search"
                      />
                      <SearchBtn
                        onClick={this.getData}
                        type="button"
                        data-testid="searchButton"
                      >
                        <Icon>
                          <AiOutlineSearch />
                        </Icon>
                      </SearchBtn>
                    </SearchInputContainer>

                    <DataWrapper>{this.renderData(isDark)}</DataWrapper>
                  </DataContainer>
                </VideoContainer>
              </Flex>
            </Container>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
