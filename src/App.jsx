import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FAQ } from './Screens/FAQ.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <FAQ></FAQ>
  )
}

export default App
