import styled, { keyframes } from 'styled-components';
import * as R from 'ramda';

import underwater from '../../assets/underwater.PNG';

const calcAnimDuration = props => (props.oscPeriod * 2 * (props.animCycles + props.delayCycles));

export const OceanBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-image: url(${underwater});
  background-size: cover;
`;

const sliiideToTheRight = props => keyframes`
  ${100 * (props.delayCycles / (props.delayCycles + props.animCycles))}% {
    transform: translatex(0vw);
  } 100% {
    transform: translatex(${(props.isReversed ? -1 : 1) * (2 * props.widthVW + 110)}vw);
  }
`;

export const TurtleXLinear = styled.div`
  position: relative;
  width: ${R.prop('widthVW')}vw;
  height: 100%;
  left: ${({ widthVW, isReversed }) => isReversed ? 105 : (-5 - widthVW)}vw;
  top: ${R.prop('yOffset')}vh;
  animation: ${sliiideToTheRight} ${calcAnimDuration}s infinite linear;
`;

const sliiideToTheDown = props => keyframes`
  ${100 * (props.delayCycles / (props.delayCycles + props.animCycles))}% {
    transform: translatey(0vh);
  } 100% {
    transform: translatey(${props.vertDistance}vh);
  }
`;

export const TurtleYLinear = styled.div`
  position: absolute;
  width: ${R.prop('widthVW')}vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: ${sliiideToTheDown} ${calcAnimDuration}s infinite linear;
`;

const crissCross = props => keyframes`
  to { transform: translatey(${props.amplitude}vh); }
`;

export const TurtleOscillator = styled.div`
  position: absolute;
  width: ${R.prop('widthVW')}vw;
  height: 100%;
  top: 0px;
  left: 0px;
  animation: ${crissCross} ${R.prop('oscPeriod')}s alternate infinite ease-in-out;
`;

const turtleTilt = props => keyframes`
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

export const TurtleRotator = styled.div`
  position: absolute;
  width: ${R.prop('widthVW')}vw;
  height: ${R.prop('widthVW')}vw;
  top: 0px;
  left: 0px;
  animation: ${turtleTilt} ${R.pipe(R.prop('oscPeriod'), R.multiply(2))}s normal infinite linear;
`;

export const TurtleImage = styled.img`
  position: absolute;
  width: ${R.prop('widthVW')}vw;
  top: 0px;
  left: 0px;
`;

export const TextBoxWrapper = styled.div`
  position: absolute;
  top: ${R.prop('yOffset')}vw;
  left: ${R.prop('xOffset')}vw;
`;

export const TextBox = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${R.prop('boxWidth')}vw;
  height: ${R.prop('boxHeight')}vw;
`;

export const Text = styled.p`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 0px;
  margin: 0px;
  width: ${R.prop('boxWidth')}vw;
  height: ${R.prop('boxHeight')}vw;
`;
