import styled from 'styled-components';
import * as R from 'ramda';

import underwater from '../../assets/underwater.PNG';

const negIfReversed = (value => (({ isReversed }) => isReversed ? (-value) : value));

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
  height: 100%;
  left: ${negIfReversed(-20)}vw;
  top: ${R.prop("yOffset")}vh;
  animation: sliiideToTheRight ${R.prop("motionPeriod")}s infinite linear;

  @keyframes sliiideToTheRight {
    to { transform: translatex(${negIfReversed(120)}vw); }
  }
`;

export const SharkYLinear = styled.div`
  position: absolute;
  width: 20vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: sliiideToTheDown ${R.prop("motionPeriod")}s infinite linear;

  @keyframes sliiideToTheDown {
    to { transform: translatey(${R.prop("vertDistance")}vh); }
  }
`;

export const SharkOscillator = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: crissCross ${R.prop("oscPeriod")}s alternate infinite ease-in-out;

  @keyframes crissCross {
    to { transform: translatey(${R.prop("amplitude")}vh); }
  }
`;

export const SharkRotator = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: ${R.propOr(20, 'widthVW')}vw;
  top: 0px;
  left: 0px;
  animation: sharkWobble ${R.pipe(R.prop("oscPeriod"), R.multiply(2))}s normal infinite linear;

  @keyframes sharkWobble {
    0% {
      transform: rotate(20deg);
    } 25% {
      transform: rotate(60deg); 
    } 50% {
      transform: rotate(20deg);
    } 75% {
      transform: rotate(-20deg); 
    } 100% {
      transform: rotate(20deg);
    }
  }
`;

export const SharkImage = styled.img`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  top: 0px;
  left: 0px;
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
