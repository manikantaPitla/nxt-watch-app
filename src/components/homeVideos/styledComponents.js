import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
`

export const NoVideosImage = styled.img`
  width: 200px;
`
export const NoVideosHeading = styled.h1`
  font-size: 20px;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  outline: none;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
