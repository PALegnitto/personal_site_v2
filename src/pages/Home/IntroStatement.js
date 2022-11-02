import { useEffect, useState } from 'react';
import Typical from 'react-typical';




/**
 * @param {{
 *  pageView: string,
 *  name: string,
 *  titles: string[]
 * }} props
 *
 * @returns
 *
 * @notes
 */
function IntroStatement({ pageView, name, titles }) {

  const [text, setText] = useState("");
  const [cursor, setCursor] = useState("|");

  useEffect(() => {
    animateText(titles[0]);

  }, []);

  useEffect(() => {
    flashCursor();
  }, []);

  function animateText(word) {

    let i = 0;

    const animate = setInterval(() => {

      if (i === word.length - 1) clearInterval(animate);

      setText(prevText => {

        const phrase = prevText + word[i];
        i++;

        return phrase;
      });

    }, 115);

  }

  function flashCursor() {

    setInterval(() => {

      setCursor(prevCursor => {

        return prevCursor === "" ? "|" : "";
      });

    }, 475);
  }

  /**
   * @param {string[]} titles
   * @param {number} timeLength
   * @returns {(string|number)[]}
   */
  function buildSteps(titles, timeLength = 2000) {

    let stepList = [];

    titles.forEach(x => {
      stepList.push(x);
      stepList.push(timeLength);
    });

    return stepList;
  }


  return (
    <div className="intro intro-statement" >
      <h1>Hello,</h1>
      <h2>I'm {name}</h2>
      <p style={{ display: 'flex' }}>
        I'm a{' '} {text}
        <div>{
          cursor}
        </div>
      </p>
    </div>
  );
}

export default IntroStatement;