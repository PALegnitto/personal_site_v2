import React from 'react';
import IntroStatement from './IntroStatement';


/**
 *
 * @param {string} name
 * @param {string[]} titles
 * @returns {React.ReactElement} IntroStatement
 */
function Intro({name,titles}) {



return (
  <div class="intro intro-main" >

   <IntroStatement
    name={name}
    titles = {titles}/>

  </div>
);
}

export default Intro;