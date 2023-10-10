import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 20px 20px 20px 0px;
  align-self: center;
  @media screen and (max-width: 1300px) {
    width: 280px;
  }
  @media screen and (max-width: 1200px) {
    width: 360px;
  }
  @media screen and (max-width: 1120px) {
    width: 290px;
  }
  @media screen and (max-width: 1120px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  padding: 15px 0px;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  margin: 0px;
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 14px;
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
