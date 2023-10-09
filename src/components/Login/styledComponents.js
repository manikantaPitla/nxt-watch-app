import styled from 'styled-components'

export const LoginDiv = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#ffffff')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FormStyle = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  box-shadow: ${props => (props.isDark ? '' : '2px 2px 31px 5px  #f1f1f1')};
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 40px;
  }
`
export const Image = styled.img`
  width: 130px;
  align-self: center;
  margin: 30px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 13px;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0px;
`

export const LabelContainerPass = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`

export const LabelPass = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 14px;
  margin: 0;
`
export const Input = styled.input`
  border: ${props =>
    props.isDark ? '1px solid #475569' : '1px solid #94a3b8'};
  padding: 10px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  outline: none;
  border-radius: 4px;
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 20px;
  border-radius: 6px;
  font-weight: 600;
  border-width: 0px;
  margin: 10px 0px;
  margin-bottom: 20px;
  min-height: 45px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Error = styled.p`
  color: #ff0b37;
  margin: 10px;
  font-size: 15px;
`
