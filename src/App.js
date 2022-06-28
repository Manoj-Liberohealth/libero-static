
import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './PageRouter';
import "@fontsource/montserrat";
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';


function App() {
  return (<>
    <CustomNavbar />
    <PageRouter />
    {/* <Footer /> */}
  </>



  );
}

export default App;
