import { useState } from 'react';
import './App.css';
import Portfolio from'./Portfolio';
import HeaderStyle from './HeaderStyle';
import Footer from './Footer';
import Testimonials from './Testimonials';
import About from './About'

function App() {
    const [count, setCount] = useState(0);
 return (
   <>
   <HeaderStyle/>
    <Portfolio/>
    <About/>
    <Testimonials/>
    <Footer/>
    </>
 )       
   
}

export default App;
