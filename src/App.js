import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [pageView, setPageView] = useState('intro');

  const titles = [
    'software engineer',
    'CX enthusiast',
    'husband',
    'father',
    'life long student'
  ];


    return (
      
  <div>
    <NavBar/>
    <PageContainer pageView={pageView} titles={titles}/>
    <Footer/>
  </div>

    );
  }

export default App;
