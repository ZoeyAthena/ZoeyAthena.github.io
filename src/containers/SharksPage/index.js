import React from 'react';

import StandardHeader from '../../components/StandardHeader';
import Shark from './shark';
import * as sharkParams from './shark-params';

import * as Styled from './styles';

const SharksPage = () => {
  return (
    <Styled.OceanBackground>
      <StandardHeader title="Here be sharkies!" />
      <Shark {...sharkParams.mako} />
      <Shark {...sharkParams.hammerhead} />
    </Styled.OceanBackground>
  )
};

export default SharksPage;
