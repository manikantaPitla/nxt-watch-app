import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin: 10px 15px 10px 0px !important;
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
    width: 100%;
  }
`
export const GamingThumbNailImage = styled.img`
  align-self: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const GamingTitle = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
