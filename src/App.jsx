import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  <Navbar />
  </div>
  )
}

export default App
