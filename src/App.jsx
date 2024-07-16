import { useState } from 'react';
import './App.css';
import Portfolio from'./Portfolio';
<<<<<<< HEAD
// import Stats from'./Stats';
import Testimonials from'./Testimonials.jsx';

=======
import HeaderStyle from './HeaderStyle';
import Footer from './Footer';
import Testimonials from './Testimonials';
import About from './About'
>>>>>>> d9cef5acdecd81ed7e3479d5950099535c47201a

function App() {
    const [count, setCount] = useState(0);
 return (
   <>
<<<<<<< HEAD
   <div>
      <HeaderStyle/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </div>
=======
   <HeaderStyle/>
    <Portfolio/>
    <About/>
    <Testimonials/>
    <Footer/>
>>>>>>> d9cef5acdecd81ed7e3479d5950099535c47201a
    </>
 )       
   
}

export default App;
