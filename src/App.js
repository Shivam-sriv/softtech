import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,useLocation } from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from './pages/about';
import Html5_Development from './solutions-pages/html5-development';
import Nodejs_Development from './solutions-pages/nodejs-development';
import Java_Development from './solutions-pages/java-development';
import Php_Development from './solutions-pages/php-development';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Laravel_Development from './solutions-pages/laravel-development';
import React_Development from './solutions-pages/react-development';
import Mern_Development from './solutions-pages/mern-development';
import Software_Development from './solutions-pages/software-development';
import Web_Development from './solutions-pages/web-development';
import Mobile_App_Development from './solutions-pages/mobile-app-development';
import E_Commerce_Development from './solutions-pages/e-commmerce';
import Ux_ui_Design from './solutions-pages/ux-ui-design';
import Graphic_Logo_Design from './solutions-pages/graphic-logo-design';
import Digital_Marketing from './solutions-pages/digital-marketing';
import Social_Media_Marketing from './solutions-pages/social-media';
// import Mobile_App_Marketing from './solutions-pages/mobile-app-marketing';
import Seo from './solutions-pages/seo';
import Get_Proposal from './pages/get-proposal';
import Ppc from './solutions-pages/ppc';
import KLF from './pages/klf';
import Bfc_Capital from './pages/bfc-capital';
import Orgeen from './pages/orgeen';
import Bfc_Publications from './pages/bfc-publications';
import Career from './pages/career';
import { useEffect } from 'react';

function App() {

  const location = useLocation()

  useEffect(()=>{
   window.scrollTo(0,0)
  },[location])
  
  return (
    <>

    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/html5-development" element={<Html5_Development />}></Route>
        <Route path="/nodejs-development" element={<Nodejs_Development />}></Route>
        <Route path="/java-development" element={<Java_Development />}></Route>
               
        <Route path="/php-development" element={<Php_Development/>}></Route>    
        <Route path="/portfolio" element={<Portfolio/>}></Route>   
        <Route path="/contact" element={<Contact/>}></Route>   
        <Route path="/laravel-development" element={<Laravel_Development/>}></Route>         
      
        <Route path="/react-development" element={<React_Development/>}></Route>  
        <Route path="/mern-development" element={<Mern_Development/>}></Route>  
        <Route path="/software-development" element={<Software_Development/>}></Route>  
        <Route path="/web-development" element={<Web_Development/>}></Route>  
        <Route path="/app-development" element={<Mobile_App_Development/>}></Route>  
        <Route path="/e-commerce-development" element={<E_Commerce_Development/>}></Route>  
        <Route path="/ppc" element={<Ppc/>}></Route>  
        <Route path="/ux-ui-design" element={<Ux_ui_Design/>}></Route>  
        <Route path="/graphic-logo-design" element={<Graphic_Logo_Design/>}></Route>  
        <Route path="/digital-marketing" element={<Digital_Marketing/>}></Route>  
        <Route path="/social-media-marketing" element={<Social_Media_Marketing/>}></Route> 
        {/* <Route path="/mobile-app-marketing" element={<Mobile_App_Marketing/>}></Route>  */}
        <Route path="/seo" element={<Seo/>}></Route> 
        <Route path="/get-proposal" element={<Get_Proposal/>}></Route> 
        <Route path="/klf" element={<KLF/>}></Route> 
        <Route path="/bfc-capital" element={<Bfc_Capital/>}></Route> 
        <Route path="/orgeen" element={<Orgeen/>}></Route> 
        <Route path="/bfc-publications" element={<Bfc_Publications/>}></Route> 
        <Route path="/career" element={<Career/>}></Route> 
        </Routes>
      <Footer/>
  
    </>
  );
}

export default App;
