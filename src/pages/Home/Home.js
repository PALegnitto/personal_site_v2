import Intro from "./Intro";


function Home({name, titles}){


  return (
  <div>

    <Intro
      name={name}
      titles={titles}/>

    <div>
      {/* <img src={require ("../../assets/profile_black_and_white.png")} alt="Phill"></img> */}
    </div>

  </div>
  );
}

export default Home;