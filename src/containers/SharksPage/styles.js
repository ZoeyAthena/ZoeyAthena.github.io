import styled, { keyframes } from 'styled-components';
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

const sliiideToTheRight = props => keyframes`
  to { transform: translatex(${negIfReversed(120)(props)}vw); }
`;

export const SharkXLinear = styled.div`
  position: relative;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: 100%;
  left: ${negIfReversed(-20)}vw;
  top: ${R.prop('yOffset')}vh;
  animation: ${sliiideToTheRight} ${R.prop('motionPeriod')}s infinite linear;
`;

const sliiideToTheDown = props => keyframes`
  to { transform: translatey(${props.vertDistance}vh); }
`;

export const SharkYLinear = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: ${sliiideToTheDown} ${R.prop('motionPeriod')}s infinite linear;
`;

const crissCross = props => keyframes`
  to { transform: translatey(${props.amplitude}vh); }
`;

export const SharkOscillator = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: ${crissCross} ${R.prop('oscPeriod')}s alternate infinite ease-in-out;
`;

const sharkWobble = props => keyframes`
  0% {
    transform: rotate(${props.medAngle}deg);
  } 25% {
    transform: rotate(${props.maxAngle}deg); 
  } 50% {
    transform: rotate(${props.medAngle}deg);
  } 75% {
    transform: rotate(${props.minAngle}deg); 
  } 100% {
    transform: rotate(${props.medAngle}deg);
  }
`;

export const SharkRotator = styled.div`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  height: ${R.propOr(20, 'widthVW')}vw;
  top: 0px;
  left: 0px;
  animation: ${sharkWobble} ${R.pipe(R.prop('oscPeriod'), R.multiply(2))}s normal infinite linear;
`;

export const SharkImage = styled.img`
  position: absolute;
  width: ${R.propOr(20, 'widthVW')}vw;
  top: 0px;
  left: 0px;
`;

export const TextBoxWrapper = styled.div`
  position: absolute;
  top: ${R.propOr(-15, 'yOffset')}vw;
  left: ${R.propOr(12, 'xOffset')}vw;
`;

export const TextBox = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${R.propOr(20, 'boxWidth')}vw;
  height: ${R.propOr(15, 'boxHeight')}vw;
`;

export const Text = styled.p`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 0px;
  margin: 0px;
  width: ${R.propOr(20, 'boxWidth')}vw;
  height: ${R.propOr(15, 'boxHeight')}vw;
`;
