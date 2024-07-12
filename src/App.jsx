import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderStyle from'./HeaderStyle';
import Footer from'./Footer';
import Portfolio from'./Portfolio';
// import Stats from'./Stats';
import Testimonials from'./Testimonials.jsx';


function App() {
    const [count, setCount] = useState(0);
 return (
   <>
   <div>
      <HeaderStyle/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </div>
    </>
 )       
   
}

export default App;
