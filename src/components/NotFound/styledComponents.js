import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : ' #f1f1f1')};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  overflow-y: auto;
`

export const Flex = styled.div`
  display: flex;
  flex-grow: 2;
  align-items: stretch;
  overflow-y: auto;
`

export const Image = styled.img`
  width: 400px;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const Heading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
