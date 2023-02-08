import styled from "styled-components";

export const BlogWrapper = styled.div`
  height: 89.5vh;
  display: flex;
  padding: 0 4%;
`;

export const ArticlesWrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px 0;
  padding-right: 3%;
  border-right: 0.1px solid #a1a1a147;
  box-sizing: border-box;
  position: relative;
`;

export const DetailsWrapper = styled.div`
  width: 25%;
  height: 100%;
`;

export const BlogsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NoContent = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #8f8e8e;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
`;
