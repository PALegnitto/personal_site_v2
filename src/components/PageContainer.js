import Intro from "../pages/Home/Intro";

function PageContainer(pageView, titles){

  if (pageView === 'intro') {

    return (

    <Intro pageView={pageView}
      name="Phill Legnitto"
      titles={titles}/>

    );
  }
}

export default PageContainer;