import IntroStatement from './IntroStatement';


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
function Intro({name,titles}) {



return (
  <div class="intro intro-main" >

   <IntroStatement name={name}
                   titles = {titles}/>

  </div>
);
}

export default Intro;