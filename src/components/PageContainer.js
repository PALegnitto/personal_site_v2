import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";

function PageContainer(pageView, titles, name){

  if (pageView === 'home') {

    return (
      <Home titles={titles} name={name}/>
    );
  };

  if (pageView === 'about') {

    return (
      <About titles={titles} name={name}/>
    );
  };

  if (pageView === 'resume') {

    return (
      <Resume titles={titles} name={name}/>
    );
  };

  if (pageView === 'projects') {

    return (
      <Projects titles={titles} name={name}/>
    );
  };

  if (pageView === 'blog') {

    return (
      <Blog titles={titles} name={name}/>
    );
  };

}

export default PageContainer;