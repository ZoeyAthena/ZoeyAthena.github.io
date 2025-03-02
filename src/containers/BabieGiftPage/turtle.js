import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import useBooleanState from '../../hooks/useBooleanState';
import useFinalHeight from '../../hooks/useFinalHeight';
import InstaPost from '../../components/InstaPost';

import * as Styled from './styles';

const Turtle = ({ animationParams, turtleImg, facts, textBoxParams }) => {
  const turtleRef = useRef(null);
  const turtleMovingState = useBooleanState(true);
  const afterLoaded = (finalHeight, ref) => {
    console.log(ref.current);
  };
  const { postRef } = useFinalHeight(afterLoaded);

  useEffect(() => {
    // Check that all four turtle-animating divs exist
    if (!!R.path(['current', 'firstChild', 'firstChild', 'firstChild'], turtleRef)) {
      const nextAnimState = turtleMovingState.state ? 'running' : 'paused';
      // Pause/resume all four levels of turtle animation.
      // If I don't delay this to the next frame,
      // the turtle vanishes the first time you click it.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          turtleRef.current.style.animationPlayState = nextAnimState;
          turtleRef.current.firstChild.style.animationPlayState = nextAnimState;
          turtleRef.current.firstChild.firstChild.style.animationPlayState = nextAnimState;
          turtleRef.current.firstChild.firstChild.firstChild.style.animationPlayState = nextAnimState;
        });
      });
    }
  }, [turtleMovingState.state]);

  return (
    <Styled.TurtleXLinear {...animationParams} ref={turtleRef}>
      <Styled.TurtleYLinear {...animationParams}>
        <Styled.TurtleOscillator {...animationParams}>
          <Styled.TurtleRotator {...animationParams}>
            <Styled.TurtleImage
              {...animationParams}
              src={turtleImg}
              alt="turtle image"
              onClick={turtleMovingState.toggle}
            />
            {turtleMovingState.state ? null : (
              <Styled.TextBoxWrapper {...textBoxParams} ref={postRef}>
                <InstaPost postId="DEq3A8wxg_P" />
                {/* <Styled.TextBox {...textBoxParams} viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0,65 0,0 100,0 100,65 40,65 30,80 20,65" fill="plum" stroke="purple" />
                </Styled.TextBox>
                <Styled.Text {...textBoxParams}>
                  {facts}
                </Styled.Text> */}
              </Styled.TextBoxWrapper>
            )}
          </Styled.TurtleRotator>
        </Styled.TurtleOscillator>
      </Styled.TurtleYLinear>
    </Styled.TurtleXLinear>
  );
};

Turtle.propTypes = {
  animationParams: PropTypes.shape({
    // Controls overall vertical movement
    yOffset: PropTypes.number,
    vertDistance: PropTypes.number,
    // Size of swimmies
    amplitude: PropTypes.number,
    // Number of swimmies per screen
    animCycles: PropTypes.number,
    // Number of swimmies between screens
    delayCycles: PropTypes.number,
    // Duration of each swimmy
    oscPeriod: PropTypes.number,
    // Size of turtle, in vw
    widthVW: PropTypes.number,
    // Whether turtle goes right to left
    isReversed: PropTypes.bool,
    // How much to tilt turtle during swimmies. med->max->med->min->med
    maxAngle: PropTypes.number,
    minAngle: PropTypes.number,
    medAngle: PropTypes.number,
  }),
  turtleImg: PropTypes.string,
  facts: PropTypes.string,
  textBoxParams: PropTypes.shape({
    boxWidth: PropTypes.number,
    boxHeight: PropTypes.number,
    xOffset: PropTypes.number,
    yOffset: PropTypes.number,
  }),
};

export default Turtle;
