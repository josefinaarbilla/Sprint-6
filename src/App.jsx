import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { ListaTareas } from './Components/ListaTareas'

function App() {
  
  const[theme, setTheme] = useState("light")

  return (
    <div id='web-container dark-theme'>
      <Header theme={theme} setTheme={setTheme}/>
      <ListaTareas/>
    </div>
  )
}

export default App
