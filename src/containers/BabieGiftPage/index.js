import React from 'react';

import StandardHeader from '../../components/StandardHeader';
import Turtle from './turtle';
import * as turtleParams from './turtle-params';

import * as Styled from './styles';

const turtList = [69, 420, 'nya', 'weh'];

const BabieGiftPage = () => {
  return (
    <Styled.OceanBackground>
      <StandardHeader title="I love you so much <3" />
      {/* <Turtle {...turtleParams.turtle1} />
      <Turtle {...turtleParams.turtle2} />
      <Turtle {...turtleParams.turtle3} />
      <Turtle {...turtleParams.turtle4} /> */}
      {turtList.map(turtKey =>
        <Turtle {...turtleParams.generateTurtleParams(turtKey)} key={turtKey} />
      )}
    </Styled.OceanBackground>
  )
};

export default BabieGiftPage;
