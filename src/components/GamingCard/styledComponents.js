import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingItems = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 0px;
`

export const StyleLink = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  width: 210px;
  @media screen and (max-width: 1230px) {
    width: 180px;
  }
  @media screen and (max-width: 1140px) {
    width: 170px;
  }
  @media screen and (max-width: 923px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 160px;
  }

  @media screen and (max-width: 410px) {
    width: 150px;
  }
`
export const TitleText = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
