import turtles from '../../assets/turtles';

const randInt = upTo => Math.floor(Math.random() * upTo);
const randIntRange = (min, max) => (randInt(max - min) + min);
const randBool = () => !!randInt(2);

export const turtle1 = {
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
  turtleImg: turtles.right1,
  facts: 'turtle1_placeholder',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const turtle2 = {
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
  turtleImg: turtles.right1,
  facts: 'turtle2_placeholder',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const turtle3 = {
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
  turtleImg: turtles.left1,
  facts: 'turtle3_placeholder',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const turtle4 = {
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
  turtleImg: turtles.left1,
  facts: 'turtle4_placeholder',
  textBoxParams: {
    boxWidth: 20,
    boxHeight: 15,
    xOffset: 8,
    yOffset: -12,
  },
};

export const generateTurtleParams = (key, isPost) => {
  const widthVW = randIntRange(8, 15);
  const maxY = 100 - 2 * widthVW; // x2 accounts for different aspect ratios
  const yOffset = randInt(maxY);
  const vertDistance = randInt(maxY) - yOffset;
  const amplitude = randIntRange(5, 50);
  const isReversed = randBool();
  const horizDistance = 2 * widthVW + 100;
  const animCycles = randIntRange(1, 6); // no more than 5 oscillations
  const angleMultiplier = (isReversed ? -1 : 1) * 180 / Math.PI;
  const medAngle = Math.atan2(vertDistance, horizDistance) * angleMultiplier;
  const maxAngle = Math.atan2(
    vertDistance / (2 * animCycles) + amplitude,
    horizDistance / (2 * animCycles)) * angleMultiplier;
  const minAngle = Math.atan2(
    vertDistance / (2 * animCycles) - amplitude,
    horizDistance / (2 * animCycles)) * angleMultiplier;
  const animDuration = Math.random() * 8 + 2;
  const oscPeriod = animDuration / animCycles;
  const delayCycles = randInt(5);
  const whichTurtleImg = (isReversed ? 'left' : 'right') + randIntRange(1, 4);
  const turtleImg = turtles[whichTurtleImg];
  const textBoxParams = {
    boxWidth: 10,
    boxHeight: 8,
    xOffset: isPost ? widthVW : 0,
    yOffset: isPost ? -15 : -7,
  };

  return {
    animationParams: {
      widthVW,
      yOffset,
      vertDistance,
      amplitude,
      isReversed,
      animCycles,
      medAngle,
      minAngle,
      maxAngle,
      oscPeriod,
      delayCycles,
    },
    turtleImg,
    postId: key,
    text: key,
    textBoxParams,
  };
};
