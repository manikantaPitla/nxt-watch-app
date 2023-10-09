/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;

  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
  }
`
export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const Flex = styled.div`
  display: flex;
  align-items: stretch;
  overflow-y: auto;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction : row
  align-items: center;
`

export const TitleContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  flex-grow: 2;
`

export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Btn = styled.button`
  background-color: transparent;

  padding: 6px 10px;
  border: 0px;
  font-size: 16px;
  // eslint-disable-next-line no-nested-ternary
  color: ${props =>
    props.like ? '#2563eb' : props.isDark ? 'white' : '#64748b'};

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const Icon = styled.i`
  font-size: 16px;
  margin-right: 6px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Border = styled.hr`
  border: 1px solid ${props => (props.isDark ? 'white' : '#cbd5e1')};
  width: 100%;
`

export const Image = styled.img`
  margin-right: 20px;
  height: 60px;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};

  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const SubText = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 0px;
  font-size: 16px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const PlayerDiv = styled.div`
  width: 100%;
`
export const Failed = styled.img`
  width: 300px;
`

export const Load = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
