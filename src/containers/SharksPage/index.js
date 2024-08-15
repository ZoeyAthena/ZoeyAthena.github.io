import React from 'react';

import StandardHeader from '../../components/StandardHeader';
import Shark from './shark';
import placeholderImage from '../../assets/sanik.png';

import * as Styled from './styles';

const sharkParams = {
  yOffset: -40,
  vertDistance: 30,
  amplitude: 20,
  motionPeriod: 8,
  oscPeriod: 2,
};

const SharksPage = () => {
  return (
    <Styled.OceanBackground>
      <StandardHeader title="Here be sharkies!" />
      <Shark sharkImg={placeholderImage} animationParams={sharkParams} />
    </Styled.OceanBackground>
  )
};

export default SharksPage;
