import React from 'react';
import IntroStatement from './IntroStatement';

/**
 * @param {{name: string, titles: string[]}} props
 */
function Intro({ name, titles }) {
  return (
    <div className="intro intro-main">
      <IntroStatement
        name={name}
        titles={titles} />
    </div>
  );
}

export default Intro;