import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [pageView, setPageView] = useState('home');

  const titles = [
    'software engineer',
    'CX enthusiast',
    'husband',
    'father',
    'life long student'
  ];

  const name = 'Phill Legnitto';


    return (

  <div>
    <NavBar name={name}/>
    <PageContainer
      pageView={pageView}
      titles={titles}
      name={name}/>
    <Footer/>
  </div>

    );
  }

export default App;
