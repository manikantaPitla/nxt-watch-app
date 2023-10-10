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

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`
export const BannerContainer = styled.div`
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
export const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const BannerRightPart = styled.div``

export const BannerImage = styled.img`
  width: 120px;
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid black;
  width: 120px;
  height: 34px;
`
export const BannerText = styled.p`
  font-size: 14px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 20px;
`
export const BannerBelowContainer = styled.div`
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 450px;
  min-height: 36px;
  border: 1px solid #909090;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const SearchIconContainer = styled.button`
  border: none;
  border-left: 1px solid #909090;
  background-color :#7e858e:
  outline: none;
  width: 50px;
`

export const SearchInput = styled.input`
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  outline: none;
  color: #7e858e;
  font-size: 14px;
  padding: 6px;
  flex-grow: 2;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
