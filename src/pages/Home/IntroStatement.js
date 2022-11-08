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
    animationLoop(titles);

  }, []);

  useEffect(() => {
    flashCursor();
  }, []);

  const animateText = word => {
    return new Promise(resolve => {
      let i = 0;

      const animate = setInterval(() => {
        if (i === word.length - 1) {

          setTimeout(async () => {
            await breakdownWord(word);
            resolve();
          }, 3000);

          clearInterval(animate);
        };

        setText(prevText => {
          const phrase = prevText + word[i];
          i++;

          return phrase;
        });
      }, 100);
    });
  }

  const breakdownWord = word => {
    return new Promise(resolve => {
      let i = word.length - 1;
      const removeLetter = setInterval(() => {
        if (i === 0) {
          clearInterval(removeLetter);
          resolve();
        }

        setText(text => {
          text = text.slice(0, -1);
          return text;
        });
        i--;
      }, 115);
    });
  }

   const animationLoop = async wordList => {
    let i = 0;

    while (true) {
      if (i === wordList.length) i = 0;
      await animateText(wordList[i]);
      i++;
    }
  }

  const flashCursor = () => {
    setInterval(() => {
      setCursor(prevCursor => prevCursor === "" ? "|" : "");
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