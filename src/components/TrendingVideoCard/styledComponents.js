import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 0px;
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
    flex-direction: column;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
`
export const TrendingProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-size: 18px;
  margin-top: 0px;
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  margin-top: 0px;
  font-size: 14px;
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  margin-top: 0px;
  font-size: 14px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
