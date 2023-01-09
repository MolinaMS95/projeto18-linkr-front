import styled from "styled-components";

export default function Forms({ children, isDisabled, submit }) {
  return (
    <Form onSubmit={submit} isDisabled={isDisabled}>
      {children}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 88%;
  margin-top: 40px;
  input {
    height: 55px;
    border-radius: 6px;
    font-family: 'Oswald';
    font-size: 22px;
    font-weight: 700;
    color: black;
    padding-left: 11px;
    background: ${(props) => props.isDisabled && "#F2F2F2"};
  }
  input::placeholder {
    color: #9F9F9F;
  }
  button {
    height: 55px;
    opacity: ${(props) => props.isDisabled && 0.7};
    background: #1877f2;
    border: none;
    border-radius: 6px;
    font-family: 'Oswald';
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
