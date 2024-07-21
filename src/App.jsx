import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/component/Navbar'
import Find from './assets/component/Find'
import { Template } from './assets/component/Template'
import { Grow } from './assets/component/Grow'
import { Market } from './assets/component/Market'
import { Footer } from './assets/component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Find/>
      <Template/>
      <Grow/>
      <Market/>
      <Footer/>
    </>
  )
}

export default App
