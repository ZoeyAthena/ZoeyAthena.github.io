import React from 'react';

import StandardHeader from '../../components/StandardHeader';
import Shark from './shark';
import sanik from '../../assets/sanik.png';

import * as Styled from './styles';

const sharkParams = {
  yOffset: -400,
  vertDistance: 200,
  amplitude: 200,
  motionPeriod: 8,
  oscPeriod: 2,
};

const SharksPage = () => {
  return (
    <Styled.OceanBackground>
      <StandardHeader title="Here be sharkies!" />
      <Shark sharkImg={sanik} animationParams={sharkParams} />
    </Styled.OceanBackground>
  )
};

export default SharksPage;
