import styled from "styled-components";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    button {
      color: white;
      border: none;
      border-radius: 4px;
      background-color: #505050;
      outline: none;
      padding: 12px 15px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover {
        background-color: black;
      }
    }
  }
`;
