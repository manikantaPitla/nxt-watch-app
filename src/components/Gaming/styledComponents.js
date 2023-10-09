import styled from 'styled-components'

export const TrendingContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  flex-grow: 2;
  overflow-y: auto;
  //   background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
  margin: 0px;

  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    justify-content: center;
  }
`

export const Flex = styled.div`
  display: flex;
  overflow-y: auto;
  align-items: stretch;
`
export const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const GamingTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
