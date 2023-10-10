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

export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
