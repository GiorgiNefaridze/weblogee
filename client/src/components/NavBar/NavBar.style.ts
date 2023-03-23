import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 4%;
  font-family: "Roboto", sans-serif;
  border-bottom: 0.1px solid #a1a1a147;

  img {
    width: 10rem;
    cursor: pointer;

    @media only screen and (max-width: 700px) {
      width: 8rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;

  @media only screen and (max-width: 550px) {
    gap: 0 7px;
  }

  @media only screen and (max-width: 450px) {
    gap: 0px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 500;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const CreateBlog = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  border: 0.2px solid grey;
  border-radius: 9px;
  padding: 9px;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    padding: 6px;
  }

  p {
    font-size: 14.5px;
    font-weight: 500;
  }

  span {
    font-size: 18px;
  }

  &:hover {
    background-color: #a1a1a147;
    box-shadow: 7px 5px 14px #f5f5f5;
  }
`;
