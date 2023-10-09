/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`
export const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 110px;
  }
  width: 100px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0px;
`
export const List = styled.li`
  padding: 0px 10px;
  align-self: center;
`

export const DesktopList = styled.li`
  display: none;
  @media screen and (min-width: 768px) {
    padding: 0px 10px;
    align-self: center;
    display: inline;
  }
`

export const MobileList = styled.li`
  padding: 0px 10px;
  align-self: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const User = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    width: 30px;
    display: inline;
  }
`
export const Logout = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    border: 1px solid #3b82f6;
    background-color: transparent;
    height: 30px;
    width: 86px;
    font-weight: 600;
    font-size: 14px;
    color: #3b82f6;
    border-radius: 4px;
  }
`

export const MobileDiv = styled.div`
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Close = styled.button`
  border: 1px solid ${props => (props.isDark ? '#cccccc' : '#313131')};
  background-color: transparent;
  height: 34px;
  width: 100px;
  font-weight: 600;
  font-size: 15px;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
  cursor: pointer;
`

export const Confirm = styled.button`
  background-color: #3b82f6;
  height: 34px;
  width: 100px;
  font-weight: 600;
  font-size: 15px;
  color: white;
  cursor: pointer;
  border-width: 0px;
  margin-left: 6px;
`

export const LogoutDiv = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${props => (props.isDark ? 'white' : 'black')};
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const NavLinksMobile = styled.div`
  width: 90vw;
  padding: 40px 0px;
`
export const NavMenuClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const MobileMenu = styled(Popup)`
  margin: 0 !important;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  &-overlay {
    margin: 0 !important;
    min-width: 100vw !important;
    min-height: 100vh !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
  }
`

export const TransparentButton = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const Item = styled.li`
  padding-left: 10px;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.active ? (props.isDark ? '#383838' : '#cccccc') : ''};
  color: ${props => (props.active ? 'red' : props.isDark ? 'white' : 'black')};
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-left: 30%;
  }
`
export const Title = styled.p`
  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isDark ? 'white' : 'black'};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  padding-left: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
