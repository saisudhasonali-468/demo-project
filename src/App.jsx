import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Components/ComponentOne'
import ComponentOne from './Components/ComponentOne'
import ComponentTwo from './Components/ComponentTwo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React.....from App.jsx</h1>
      <ComponentOne/>
      <ComponentTwo/>
          </>
  )
}

export default App
