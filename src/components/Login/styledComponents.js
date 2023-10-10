import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 40px 30px;
  }
`

export const LoginLogoImage = styled.img`
  width: 130px;
  align-self: center;
  margin: 5px 0px 15px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0px;
`
export const LabelInput = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 13px;
`

export const UserInput = styled.input`
  color: #475569;
  font-size: 15px;
  outline: none;
  padding: 10px;
  height: 40px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const ShowPasswordLabel = styled.label`
  font-size: 15px;
  color: #1e293b;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
`

export const SubmitError = styled.p`
  font-size: 14px;
  color: #ff0b37;
`
