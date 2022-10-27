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
    <div class="intro intro-statement" >
      <h1>Hello,</h1>
      <h2>I'm {name}</h2>
      <p>I'm a{' '}
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={buildSteps(titles)}
        />
      </p>
    </div>
  );
}

export default IntroStatement;