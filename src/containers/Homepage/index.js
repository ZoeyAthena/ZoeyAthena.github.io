import React from 'react';

import StandardHeader from '../../components/StandardHeader';
import WhosAGoodPup from '../../components/WhosAGoodPup';

import './index.css';

function Homepage() {
  return (
    <React.Fragment>
      <StandardHeader />
      <div className="content-body">
        <p>Hi, I'm Zoey Athena and this is my site. Thank you for visiting.</p>
        <p>I made this website using React, to show off my coding skills to employers and to host personal projects.</p>
        <p>I wanted to have some fun with this site; I'm much more professional when I'm actually working for someone.</p>
        <p>Check out the games; I'm proud of how they turned out.</p>
        <p>More content (and maybe even some professionalism) coming soon. Please check again soon.</p>
        <a
          className="App-link"
          href="https://github.com/ZoeyAthena"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub page
        </a>
        <WhosAGoodPup />
      </div>
    </React.Fragment>
  );
}

export default Homepage;
