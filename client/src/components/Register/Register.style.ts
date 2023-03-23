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

    @media only screen and (max-width: 1600px) {
      width: 55%;
    }

    @media only screen and (max-width: 1000px) {
      width: 80%;
    }

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

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
  border: 1.6px dashed grey;
  border-radius: 7px;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    width: 25%;
  }

  @media only screen and (max-width: 600px) {
    width: 30%;
    padding: 8px 0px;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: ${({ fillWithGreen }) => (fillWithGreen ? "green" : "black")};
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  svg {
    color: ${({ fillWithGreen }) => (fillWithGreen ? "green" : "black")};

    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  &:hover {
    background-color: ${({ fillWithGreen }) =>
      fillWithGreen ? null : "#a1a1a147"};
    box-shadow: 7px 5px 14px #f5f5f5;
  }
`;
