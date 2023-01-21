import styled from "styled-components";

interface IProps {
  fillWithGreen: boolean;
}

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

export const UploadImage = styled.div<IProps | HTMLElement>`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 7px;
  padding: 8px 0px;
  background-color: ${({ fillWithGreen }) =>
    fillWithGreen ? "#00cc00" : null};
  border: 0.2px solid grey;
  border-radius: 7px;
  cursor: pointer;

  label {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: ${({ fillWithGreen }) => (fillWithGreen ? "white" : "black")};
    cursor: pointer;
  }

  svg {
    color: ${({ fillWithGreen }) => (fillWithGreen ? "white" : "black")};
  }

  &:hover {
    background-color: ${({ fillWithGreen }) =>
      fillWithGreen ? null : "#a1a1a147"};
    box-shadow: 7px 5px 14px #f5f5f5;
  }
`;
