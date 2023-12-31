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

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 250px;
`
export const NotFoundVideosHeading = styled.h1`
  font-size: 20px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-size: 16px;
  color: ${props => props.noteColor};
  text-align: center;
`
