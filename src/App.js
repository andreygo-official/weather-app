import './App.css';
import { Header } from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NewsContainer from './components/News/NewsContainer';
import NewsDetails from './components/News Details/NewsDetails';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='news' element={<NewsContainer />} />
        <Route path='news/:id' element={<NewsDetails />}/>
        <Route path='photos' element={<Photos />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
