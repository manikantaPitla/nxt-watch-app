import styled from 'styled-components'

export const TrendingContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  flex-grow: 2;
  padding-left: 0px;
  overflow-y: auto;
  margin: 0;
`
export const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;

  overflow-y: auto;
  margin: 0;
`
export const Title = styled.p`
  font-size: 20px;
  padding-left: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const Text = styled.p`
  font-size: 16px;

  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-grow: 2;
  align-items: stretch;
  overflow-y: auto;
`

export const ContainerDiv = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`

export const Images = styled.img`
  width: '500px';
`

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
