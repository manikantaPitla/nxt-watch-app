/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
    min-width: 280px;
    width: 280px;
  }
`
export const SocialIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const Contact = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDark ? 'white' : '#424242')};
`

export const SideContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const Item = styled.li`
  padding: 0px 15px;
  font-size: 14px;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.active ? (props.isDark ? '#383838' : '#e2e8f0') : ''};
  color: ${props =>
    props.active ? '#ff0b37' : props.isDark ? 'white' : '#475569'};
  display: flex;
  align-items: center;
`
export const Title = styled.p`
  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isDark ? 'white' : '#475569'};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  padding-left: 10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ContactCard = styled.div`
  padding: 15px;
`

export const Text = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const ListIcon = styled.i`
  font-size: 16px;
`
