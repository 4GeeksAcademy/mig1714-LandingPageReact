import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


import 'bootstrap-icons/font/bootstrap-icons.css';

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Card/>
    <Footer/>

    {/* <Home/> */}
  </React.StrictMode>,
)
