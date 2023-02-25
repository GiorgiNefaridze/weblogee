import styled from "styled-components";

export const FilteringWrapper = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Search = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border: 0.1px solid #a1a1a147;
  color: rgb(158 158 158);
  border-radius: 5px;
  gap: 0 10px;
  cursor: pointer;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: rgb(158, 158, 158);
    font-family: "Roboto", sans-serif;
  }
`;
