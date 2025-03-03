import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Flex } from 'rebass';

import pageRoutes from '../../constants/page-routes';

const WhosAGoodPup = () => {
  const [answer, setAnswer] = useState('');
  const correct = (typeof(answer) === 'string' && answer.toLowerCase() === 'me');

  return (
    <Flex>
      <Flex flexDirection="column">
        <p>To my lovely little Lavender:
          Access your gift by answering the question:
          Who's a good puppy?</p>
      </Flex>
      <Flex flexDirection="column">
        <input
          placeholder="Who's a good puppy?"
          value={answer}
          onChange={changeEvent => { setAnswer(changeEvent.target.value); }}
        />
        <div>
          <Link to={pageRoutes.BABIE_GIFT}>
            <button disabled={!correct}>Good girl!!</button>
          </Link>
        </div>
      </Flex>
    </Flex>
  );
};

export default WhosAGoodPup;
