import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 280px;
    width: 280px;
  }
`

export const NavOptions = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 0px 15px;
  font-size: 14px;
`
export const NavText = styled.p`
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ContactHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  width: 30px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-size: 15px;
  line-height: 23px;
  color: ${props => props.color};
  font-weight: 400;
`
export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
