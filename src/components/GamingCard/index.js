import AppContext from '../../context/AppContext'
import {
  GamingItems,
  StyleLink,
  Image,
  Text,
  TitleText,
} from './styledComponents'

const GamingCard = props => {
  const {GamingItem} = props
  const {id, title, thumbnailUrl, viewCount} = GamingItem
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyleLink to={`/videos/${id}`}>
            <GamingItems>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <TitleText isDark={isDark}>{title}</TitleText>
                <Text isDark={isDark}>{viewCount} Watching Worldwide</Text>
              </div>
            </GamingItems>
          </StyleLink>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingCard
