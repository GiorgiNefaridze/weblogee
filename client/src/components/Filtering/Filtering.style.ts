import styled from "styled-components";

interface Iprops {
  select: boolean;
}

export const FilteringWrapper = styled.div`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Search = styled.label`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border: 0.1px solid #a1a1a147;
  color: rgb(158 158 158);
  border-radius: 25px;
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

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  color: rgb(165, 165, 165);
  font-family: "Roboto", sans-serif;
  gap: 0 10px;
  cursor: pointer;
`;

export const Categories = styled.div<Iprops | HTMLElement>`
  color: ${({ select }) => (select ? "white" : "#383838")};
  background-color: ${({ select }) => (select ? "#727272" : "#c7c7c7")};
  font-family: "Roboto", sans-serif;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 13px;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }
`;
