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

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const GamingTitleIconContainer = styled.div`
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
export const GamingText = styled.h1`
  font-size: 22px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const GamingVideoList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin: 0;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
