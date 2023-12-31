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
export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const SavedTitleIconContainer = styled.div`
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
export const SavedText = styled.h1`
  font-size: 22px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 40px 0px;
`

export const NoSavedVideosImage = styled.img`
  width: 250px;
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 20px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-size: 16px;
  color: ${props => props.noteColor};
  text-align: center;
`
