import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  min-width: 80vw;
  justify-content: center;
  a:link {
    text-decoration: none;
  }
`;

export const NavButton = styled.div`
  height: 70px;
  width: 120px;
  background-color: #ffbbbb;
  color: black;
  text-align: center;
  line-height: 70px;
  border: 2px solid #bbbbff;
  :hover {
    background-color: #bbbbff;
  }
`;
