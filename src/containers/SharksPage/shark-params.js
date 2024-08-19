import makoImg from '../../assets/sharks/mako.png';
import hammerheadImg from '../../assets/sharks/hammerhead.png';
import whaleImg from '../../assets/sharks/whale.png'
import bullImg from '../../assets/sharks/bull.png'

export const mako = {
  animationParams: {
    yOffset: -40,
    vertDistance: 30,
    amplitude: 20,
    animCycles: 2,
    delayCycles: 0,
    oscPeriod: 2,
    widthVW: 13,
    isReversed: false,
    maxAngle: 60,
    minAngle: -20,
    medAngle: 20,
  },
  sharkImg: makoImg,
  facts: 'Soon, there will be some mako shark facts here.',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const hammerhead = {
  animationParams: {
    yOffset: 20,
    vertDistance: -50,
    amplitude: 10,
    animCycles: 4,
    delayCycles: 1,
    oscPeriod: 1.5,
    widthVW: 30,
    isReversed: false,
    maxAngle: -15,
    minAngle: -35,
    medAngle: -25,
  },
  sharkImg: hammerheadImg,
  facts: 'Soon, there will be some hammerhead shark facts here.',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const bull = {
  animationParams: {
    yOffset: 30,
    vertDistance: -80,
    amplitude: 30,
    animCycles: 5,
    delayCycles: 3,
    oscPeriod: 1.4,
    widthVW: 25,
    isReversed: true,
    maxAngle: -5,
    minAngle: 65,
    medAngle: 30,
  },
  sharkImg: bullImg,
  facts: 'Soon, there will be some bull shark facts here.',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const whale = {
  animationParams: {
    yOffset: 0,
    vertDistance: 60,
    amplitude: 10,
    animCycles: 1,
    delayCycles: 4,
    oscPeriod: 4,
    widthVW: 45,
    isReversed: true,
    maxAngle: -20,
    minAngle: 10,
    medAngle: -5,
  },
  sharkImg: whaleImg,
  facts: 'Soon, there will be some whale shark facts here.',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};
