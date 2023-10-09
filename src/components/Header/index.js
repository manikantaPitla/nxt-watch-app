import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'
import AppContext from '../../context/AppContext'
import {tabList} from '../SideBar'

import {
  NavLinksMobile,
  NavBar,
  Image,
  ListContainer,
  List,
  DesktopList,
  User,
  Logout,
  LogoutDiv,
  Text,
  Close,
  Confirm,
  StyledPopup,
  TransparentButton,
  MobileDiv,
  MobileList,
  StyledLink,
  Item,
  Title,
  MobileMenu,
  NavMenuClose,
} from './styledComponents'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {toggleTheme, isDark} = value
        const linkParts = document.location.href.split('/')
        const pageLink = `/${linkParts[linkParts.length - 1]}`
        return (
          <NavBar isDark={isDark}>
            <Link to="/">
              <Image
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <ListContainer>
              <List>
                <TransparentButton
                  data-testid="theme"
                  type="button"
                  onClick={toggleTheme}
                >
                  {isDark ? (
                    <BsSun size="20" color="white" />
                  ) : (
                    <FaMoon size="20" />
                  )}
                </TransparentButton>
              </List>
              <DesktopList>
                <User
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </DesktopList>
              <MobileList>
                <MobileMenu
                  isDark={isDark}
                  modal
                  trigger={
                    <GiHamburgerMenu
                      size="22"
                      color={isDark ? 'white' : 'black'}
                    />
                  }
                >
                  {close => (
                    <>
                      <NavMenuClose>
                        <AiOutlineClose
                          onClick={close}
                          size="22"
                          color={isDark ? 'white' : 'black'}
                        />
                      </NavMenuClose>
                      <NavLinksMobile>
                        {tabList.map(each => {
                          const {title, link, Icon} = each
                          return (
                            <StyledLink to={link} key={title}>
                              <Item isDark={isDark} active={pageLink === link}>
                                <Icon />
                                <Title
                                  isDark={isDark}
                                  active={pageLink === link}
                                >
                                  {title}
                                </Title>
                              </Item>
                            </StyledLink>
                          )
                        })}
                      </NavLinksMobile>
                    </>
                  )}
                </MobileMenu>
              </MobileList>
              <List>
                <StyledPopup
                  modal
                  trigger={
                    <div>
                      <Logout type="button">Logout</Logout>
                      <MobileDiv>
                        <FiLogOut
                          size="22"
                          color={isDark ? 'white' : 'black'}
                        />
                      </MobileDiv>
                    </div>
                  }
                >
                  {close => (
                    <LogoutDiv isDark={isDark}>
                      <Text isDark={isDark}>
                        Are you sure, you want to logout
                      </Text>
                      <Close isDark={isDark} type="button" onClick={close}>
                        Cancel
                      </Close>
                      <Confirm onClick={logout} type="button">
                        Confirm
                      </Confirm>
                    </LogoutDiv>
                  )}
                </StyledPopup>
              </List>
            </ListContainer>
          </NavBar>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
