import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
import { useState, useEffect } from "react";

const fetchTitles = () => Promise.resolve([
  'software engineer',
  'CX enthusiast',
  'husband',
  'father',
  'life long student'
]);

const name = 'Phill Legnitto';

const App = () => {
  const [pageView, setPageView] = useState('Home');
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetchTitles().then(titles => setTitles(titles));
  }, []);

  const handleViewChange = (page) => {
    setPageView(page);
  };

  return (
    <div>
      <NavBar handleViewChange={handleViewChange} name={name} />
      <PageContainer
        pageView={pageView}
        titles={titles}
        name={name} />
      <Footer />
    </div>
  );
};

export default App;
