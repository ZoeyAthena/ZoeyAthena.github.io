import styled from 'styled-components';

import underwater from '../../assets/underwater.PNG';

export const OceanBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-image: url(${underwater});
  background-size: cover;
`;
