import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  font-family: "Roboto", sans-serif;

  img {
    width: 10rem;
    cursor: pointer;
  }

  img[title="weblogee"] {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 15px;

  span {
    font-weight: 700;

    &::first-letter {
      text-transform: uppercase;
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

  p {
    font-size: 15px;
    font-weight: 400;
  }

  span {
    font-size: 18px;
  }
`;
