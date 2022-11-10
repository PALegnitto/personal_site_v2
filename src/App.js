import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [pageView, setPageView] = useState('Home');

  const titles = [
    'software engineer',
    'CX enthusiast',
    'husband',
    'father',
    'life long student'
  ];

  const name = 'Phill Legnitto';

  const handleViewChange = (e) => {
    const page = e.target.innerText;
    console.log("handleView",page);
    console.log("evt",e);
    setPageView(page);
  }


    return (

  <div>
    <NavBar handleViewChange={handleViewChange} name={name}/>
    <PageContainer
      pageView={pageView}
      titles={titles}
      name={name}/>
    <Footer/>
  </div>

    );
  }

export default App;
