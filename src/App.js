
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './PageRouter';
import "@fontsource/montserrat";
import Footer from './components/Footer';


function App() {
  return (<>
    <Navbar />
    <PageRouter />
    {/* <Footer /> */}
  </>



  );
}

export default App;
