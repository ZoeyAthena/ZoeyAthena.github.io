import makoImg from '../../assets/mako.png';
import hammerheadImg from '../../assets/hammerhead.png';

export const mako = {
  animationParams: {
    yOffset: -40,
    vertDistance: 30,
    amplitude: 20,
    motionPeriod: 8,
    oscPeriod: 2,
    widthVW: 20,
    isReversed: false,
    maxAngle: 60,
    minAngle: -20,
    medAngle: 20,
  },
  sharkImg: makoImg,
  facts: 'Soon, Zoey\'s magical wife will put some mako facts here.',
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
    motionPeriod: 12,
    oscPeriod: 1.5,
    widthVW: 35,
    isReversed: false,
    maxAngle: -15,
    minAngle: -35,
    medAngle: -25,
  },
  sharkImg: hammerheadImg,
  facts: 'Soon, Zoey\'s heavenly wife will put some hammerhead facts here.',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};
