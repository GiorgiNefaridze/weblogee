import styled from "styled-components";

interface IPros {
  selected: boolean;
}

export const Create = styled.form`
  width: 100%;
  padding: 35px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  font-family: "Roboto", sans-serif;
  padding: 20px 0;

  h2 {
    font-weight: bold;
    font-size: 1.3em;
  }

  span {
    color: red;
    font-weight: 500;
  }
`;

export const BlogTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px 0;

  p {
    margin-bottom: 10px;
  }
`;

export const Thumbnail = styled.div<IPros | HTMLElement>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  p {
    color: ${({ selected }) => (selected ? "green" : "black")};
  }
`;

export const BlogContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px 0;

  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 100px;
    font-size: 17px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
  }
`;

export const Image = styled.label<IPros | HTMLElement>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px 0;
  padding: 20% 0;
  border: ${({ selected }) =>
    selected ? "2px dashed green" : "2px dashed grey"};
  cursor: pointer;

  input {
    display: none;
  }
`;

export const Footer = styled.footer`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-top: 1px solid grey;
  padding: 20px 0;
  button {
    outline: none;
    border: none;
    background-color: transparent;
    border: 0.2px solid grey;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #adabab;
      color: white;
      transition: All 0.5s;
    }
  }
`;
