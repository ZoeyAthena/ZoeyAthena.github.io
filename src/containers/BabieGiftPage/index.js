import React from 'react';

import sweetPosts from '../../constants/sweet-insta-posts';
import NavBar from '../../components/NavBar';
import Turtle from './turtle';
import * as turtleParams from './turtle-params';

import * as Styled from './styles';

const turtlePosts = sweetPosts.filter(
  ([postId, whichSlides]) => (whichSlides === null || whichSlides === 'all'));

const BabieGiftPage = () => {
  return (
    <Styled.OceanBackground>
      <Styled.OceanHeader>
        <h1 className="page-title">I love you so much!!!</h1>
      </Styled.OceanHeader>
      <NavBar />
      {turtlePosts.map(([postId]) =>
        <Turtle {...turtleParams.generateTurtleParams(postId)} key={postId} />
      )}
    </Styled.OceanBackground>
  )
};

export default BabieGiftPage;
