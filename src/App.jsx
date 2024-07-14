import { useState } from 'react';
import './App.css';
import Portfolio from'./Portfolio';

import Testimonials from'./Testimonials.jsx';


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
