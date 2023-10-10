import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const Flex = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: stretch;
  overflow-y: auto;
`
export const Content = styled.div`
  padding: 20px;
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const TitleIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 80px;
  padding: 10px;
  margin-right: 15px;
  background-color: #d7dfe9;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingText = styled.h1`
  font-size: 22px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
