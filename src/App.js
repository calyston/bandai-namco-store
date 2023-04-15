import './sass/main.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  const [yOverflow, setyOverflow] = useState(true);
  const toggleyOverflow = () => {
    setyOverflow(!yOverflow);
  }

  // Change the Title of a Page

  // the pathname is what will trigger the title change
  const { pathname } = useLocation();

  //change the title of the document like this
  useEffect(() => {
    console.log("pathname:", pathname)
    if (pathname === "/") {
      document.title = "Bandai Namco Store";
    }
    else if (pathname === "/about") {
      document.title = "All Games | Bandai Namco Store";
    }

  }, [pathname]);


  return (
    <div className={yOverflow ? "" : "hideOverflow"}>
      <Header toggleyOverflow={toggleyOverflow} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
