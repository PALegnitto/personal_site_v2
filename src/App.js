import PageContainer from './pageContainer/PageContainer';
import './App.css';
import { useState, useEffect } from "react";
import Intro from './Intro/Intro';

function App() {

  const [pageView, setPageView] = useState('intro');

  const titles = [
    'software engineer',
    'CX enthusiast',
    'husband',
    'father',
    'life long student'
]




  if (pageView === 'intro'){

    return  <Intro pageView={pageView}
                   name="Phill Legnitto"
                   titles={titles}
              />
  } else {
    return <PageContainer pageView={pageView} />
  }
}

export default App;
