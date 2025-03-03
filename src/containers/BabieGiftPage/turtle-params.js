import turtles from '../../assets/turtles';
import cinnamoroll from '../../assets/cinnamoroll.png';

const randInt = upTo => Math.floor(Math.random() * upTo); // [0, upTo)
const randIntRange = (min, max) => (randInt(max - min) + min); // [min, max)
const randBool = () => !!randInt(2);

export const secretCinnamoroll = () => ({
  animationParams: {
    widthVW: 10,
    yOffset: 120,
    vertDistance: 0,
    amplitude: 0,
    isReversed: randBool(),
    minAngle: 0,
    medAngle: 0,
    maxAngle: 0,
    animCycles: 1,
    delayCycles: randIntRange(2, 16),
    oscPeriod: 3,
    onlyOnce: true,
  },
  turtleImg: cinnamoroll,
  text: 'You found the secret cinnamoroll!! Tell Zoey and get clickies for being such a good pup!! :3',
  textBoxParams: {
    boxWidth: 15,
    boxHeight: 12,
    xOffset: 0,
    yOffset: -11,
  }
});

export const generateTurtleParams = (key, isPost) => {
  const widthVW = randIntRange(8, 15);
  const maxY = 100 - 2 * widthVW; // x2 accounts for different aspect ratios
  const yOffset = randInt(maxY);
  const vertDistance = randInt(maxY) - yOffset;
  const amplitude = randIntRange(5, 50);
  const isReversed = randBool();
  const horizDistance = widthVW + 110;
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
