import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarBg = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const HeaderLogo = styled.img`
  @media screen and (min-width: 768px) {
    width: 110px;
  }
  width: 100px;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
`
export const LogoutButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    border: 1px solid #3b82f6;
    background-color: transparent;
    height: 30px;
    width: 86px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    color: #3b82f6;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 28px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 6px;
  padding: 20px;
  height: 180px;
  width: 300px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 90%;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  color: grey;
  margin: 12px;
  outline: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const ModalDesc = styled.p`
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
