import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderStyle from'./HeaderStyle';
import Footer from'./Footer';
import Portfolio from'./Portfolio';
import Stats from'./stats';
import Testimonials from'./Testimonials.jsx';


function App() {
    const [count, setCount] = useState(0);
 return (
   <>
   <div>
        <HeaderStyle />
        <Router>
          <Routes>  
          <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/footer" element={<Footer />} />
          
          </Routes>
        </Router>
    </div>
    </>
 )       
   
}

export default App;
