import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingItem = styled.li`
  display: flex;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px 12px;
  }
`

export const CardImage = styled.img`
  width: 350px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};

  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Title = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const TextCard = styled.div`
  margin-left: 15px;
`

export const TrendLink = styled(Link)`
  text-decoration: none;
`
export const SpanText = styled.p`
  margin-right: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
