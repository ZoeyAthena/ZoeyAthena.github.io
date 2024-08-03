import styled from 'styled-components';

export const CFGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 35vw;
  height: 30vw;
  opacity: 1;
`;

export const CFColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  width: 5vw;
  height: 30vw;
  overflow: hidden;
`;

export const CFWrapper = styled.div`
  box-sizing: border-box;
  width: 80vw;
  margin: 0 10vw;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
