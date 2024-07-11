import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import InfoPage from './InfoPage';
import Footer from './Footer';


function App() {
    const [count, setCount] = useState(0);
        
    return (
        <Router>
            <div>
                <Navbar />
                
                

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/info" element={<InfoPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
