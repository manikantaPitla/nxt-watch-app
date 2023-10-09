import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : ' #f9f9f9')};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`
export const FailureContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  width: 250px;
`
export const FailureTitle = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 16px;
`
export const FailureText = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 14px;
`
export const RetryBtn = styled.button`
  background-color: #3b82f6;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 10px;
  border: none;
  outline: none;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const VideoContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`
export const DataContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`

export const Videos = styled.div`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

export const Flex = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: stretch;
  overflow-y: auto;
`
export const DataWrapper = styled.div`
  overflow-y: auto;
`

export const SearchInputContainer = styled.div`
  display: flex;
  width: 450px;
  height: 36px;
  border: 1px solid #909090;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #7e858e;
  font-size: 14px;
  padding: 6px;
  flex-grow: 2;
`

export const SearchBtn = styled.button`
  border: none;
  border-left: 1px solid #909090;
  background-color :#7e858e:
  outline: none;
  width: 40px;
`
export const Icon = styled.i`
  font-size: 16px;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-size: cover;
  display: flex;
  min-height: 250px;
  padding: 20px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    min-height: 180px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Cross = styled.button`
  align-self: flex-start;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const Logo = styled.img`
  width: 120px;
`

export const Btn = styled.button`
  background-color: transparent;
  color: black;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid black;
  width: 120px;
  height: 34px;
`
