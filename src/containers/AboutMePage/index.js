import React from 'react';

import FloatIn from '../../components/FloatIn';
import StandardHeader from '../../components/StandardHeader';
import { BasicInfo, Degree, WorkExperience, OtherInfo } from './content';

import * as Styled from './styles';

const AboutMePage = () => (
  <React.Fragment>
    <StandardHeader />
    <Styled.ContentList>
      <Styled.ImageWrapper>
        <FloatIn delay="500ms">
          <BasicInfo />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1000ms">
          {/* Selfie, light makeup, black+flowery dress */}
          <Styled.AMPImage src="https://i.imgur.com/TJx4Krg.jpeg" />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1500ms">
          <WorkExperience />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="750ms">
          <Degree />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1250ms">
          <OtherInfo />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1750ms">
          {/* Selfie, pink+blue hair, suit jacket */}
          <Styled.AMPImage src="https://i.imgur.com/qPmFV1Q.jpg" />
        </FloatIn>
      </Styled.ImageWrapper>
    </Styled.ContentList>
  </React.Fragment>
);

export default AboutMePage;
