import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import useBooleanState from '../../hooks/useBooleanState';

import * as Styled from './styles';

const Shark = ({ animationParams, sharkImg, textBoxParams }) => {
  const sharkRef = useRef(null);
  const sharkMovingState = useBooleanState(true);

  useEffect(() => {
    if (!!R.path(['current', 'firstChild', 'firstChild', 'firstChild'], sharkRef)) {
      const nextAnimState = sharkMovingState.state ? 'running' : 'paused';
      // Pause/resume all four levels of shark animation.
      // If I don't delay this to the next frame,
      // the shark vanishes the first time you click it.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          sharkRef.current.style.animationPlayState = nextAnimState;
          sharkRef.current.firstChild.style.animationPlayState = nextAnimState;
          sharkRef.current.firstChild.firstChild.style.animationPlayState = nextAnimState;
          sharkRef.current.firstChild.firstChild.firstChild.style.animationPlayState = nextAnimState;
        });
      });
    }
  }, [sharkMovingState.state]);

  return (
    <Styled.SharkXLinear
      {...animationParams}
      ref={sharkRef}
      >
      <Styled.SharkYLinear {...animationParams}>
        <Styled.SharkOscillator {...animationParams}>
          <Styled.SharkRotator {...animationParams}>
            <Styled.SharkImage src={sharkImg} alt="shark image" onClick={sharkMovingState.toggle} />
            {sharkMovingState.state ? null : (
              <Styled.TextBoxWrapper>
                <Styled.TextBox {...textBoxParams} viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0,65 0,0 100,0 100,65 40,65 30,80 20,65" fill="lightblue" stroke="blue" />
                </Styled.TextBox>
                <Styled.Text>
                Sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text
                </Styled.Text>
              </Styled.TextBoxWrapper>
            )}
          </Styled.SharkRotator>
        </Styled.SharkOscillator>
      </Styled.SharkYLinear>
    </Styled.SharkXLinear>
  );
};

Shark.propTypes = {
  animationParams: PropTypes.shape({
    yOffset: PropTypes.number,
    vertDistance: PropTypes.number,
    amplitude: PropTypes.number,
    motionPeriod: PropTypes.number,
    oscPeriod: PropTypes.number,
    widthVW: PropTypes.number,
    isReversed: PropTypes.bool,
  }),
  sharkImg: PropTypes.string,
  textBoxParams: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    xOffset: PropTypes.number,
    yOffset: PropTypes.number,
    text: PropTypes.string,
  }),
};

export default Shark;
