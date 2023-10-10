import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
`

export const FailedImage = styled.img`
  width: 200px;
`
export const FailedHeading = styled.h1`
  font-size: 20px;
  color: ${props => props.headingColor};
`

export const FailedNote = styled.p`
  font-size: 16px;
  color: ${props => props.noteColor};
  text-align: center;
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
