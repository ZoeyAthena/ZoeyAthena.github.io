import styled from 'styled-components';
import * as R from 'ramda';

import underwater from '../../assets/underwater.PNG';

export const OceanBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-image: url(${underwater});
  background-size: cover;
`;

export const SharkXLinear = styled.div`
  position: relative;
  width: 20vw;
  left: ${({ isReversed }) => isReversed ? 20 : -20}vw;
  top: ${R.prop("yOffset")}px;
  animation: sliiideToTheRight ${R.prop("motionPeriod")}s infinite linear;

  @keyframes sliiideToTheRight {
    to { transform: translatex(${({ isReversed }) => isReversed ? -120 : 120}vw); }
  }
`;

export const SharkYLinear = styled.div`
  position: absolute;
  width: 20vw;
  animation: sliiideToTheDown ${R.prop("motionPeriod")}s infinite linear;

  @keyframes sliiideToTheDown {
    to { transform: translatey(${R.prop("vertDistance")}px); }
  }
`;

export const SharkOscillator = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  animation: crissCross ${R.prop("oscPeriod")}s alternate infinite ease-in-out;

  @keyframes crissCross {
    to { transform: translatey(${R.prop("amplitude")}px); }
  }
`;

export const SharkImage = styled.img`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
`;

export const TextBoxWrapper = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'width')}vw;
  height: ${R.propOr(15, 'height')}vw;
  top: ${R.propOr(-15, 'yOffset')}vw;
  left: ${R.propOr(12, 'xOffset')}vw;
`;

export const TextBox = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Text = styled.p`
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 5px;
`;
