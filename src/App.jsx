import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Components/ComponentOne'
import ComponentOne from './Components/ComponentOne'
import ComponentTwo from './Components/ComponentTwo'
import Member from './Components/Member'
import { student } from './Data/Student'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main-student">
      <h1>Student Details</h1>
      {
        student.map(s=>
          <Member id={s.id} name={s.name} rollno={s.rollno} />
          )
      }
      </div>
  )
}

export default App
