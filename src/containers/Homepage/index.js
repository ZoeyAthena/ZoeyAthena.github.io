import React from 'react';

import CollatzPhoneInput from '../../components/CollatzPhoneInput';
import StandardHeader from '../../components/StandardHeader';

import './index.css';

function Homepage() {
  return (
    <React.Fragment>
      <StandardHeader />
      <div className="content-body">
        <p>To employers: My legal name is Matthew Phillips, but please don't ever call me that.</p>
        <p>Hi, I'm Zoey and this is my site. Thank you for visiting.</p>
        <p>I made this website to show off my l33t c0d1ng ski11z to employers.</p>
        <p>I wanted to have some fun with this site; I'm much more professional when I'm actually working for someone.</p>
        <p>Check out the games; there's actually some content there lol</p>
        <p>More content (and maybe even some professionalism) coming soon. Please check again tomorrow.</p>
        <a
          className="App-link"
          href="https://github.com/Matthewmatical-99"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub page
        </a>
        <p>Check out this very user-friendly phone-number input!</p>
        <CollatzPhoneInput />
      </div>
    </React.Fragment>
  );
}

export default Homepage;
