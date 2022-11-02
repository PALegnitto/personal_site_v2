import { useEffect, useState } from 'react';





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

      if (i === word.length - 1) {

        setTimeout( () => {
          breakdownWord(i);
        }, 3000);
        
        clearInterval(animate);
      };

      setText(prevText => {

        const phrase = prevText + word[i];
        i++;

        return phrase;
      });

    }, 100);

  }

  function breakdownWord(interval){

    const animate = setInterval( () => {

      if (interval === 0) clearInterval(animate);

      setText(text => {
        text = text.slice(0,-1);

        return text;
      })

    },115);


  }

  function flashCursor() {

    setInterval(() => {

      setCursor(prevCursor => {

        return prevCursor === "" ? "|" : "";
      });

    }, 500);
  }


  return (
    <div className="intro intro-statement" >
      <h1>Hello,</h1>
      <h2>I'm {name}</h2>
      <p style={{ display: 'flex' }}>
        I'm a{' '} {text}
        <div>
          {cursor}
        </div>
      </p>
    </div>
  );
}

export default IntroStatement;