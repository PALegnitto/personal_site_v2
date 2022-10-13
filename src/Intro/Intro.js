import Typical from 'react-typical';


/**
 * Intro
 *
 * props:
 *  - pageView (type: string, options "intro", "about", "resume", "portfolio")
 *  - name (type: string)
 *  - titles (type: list of strings)
 *
 * App => Intro => about or resume or portfolio
 */
function Intro({pageView,name,titles}) {
  console.log(titles)

  /**
   * params:
   *    - titles: ["string","string"...]
   *    - timeLength: integer representing timelength of each title shown
   *
   * returns:
   *    - ["title", 2000, "title2", 2000...]
   */
  function buildSteps(titles,timeLength=2000){
    let stepList = [];
     titles.forEach(x => {
      stepList.push(x);
      stepList.push(timeLength);
    });
    console.log(stepList);
    return stepList;
  }

return (
  <div class="title-box" >
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

export default Intro;