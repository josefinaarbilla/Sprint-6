import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { ListaTareas } from './Components/ListaTareas'

function App() {
  
  const[theme, setTheme] = useState("light")

  return (
    <div id='web-container' className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <Header theme={theme} setTheme={setTheme}/>
      <ListaTareas theme={theme}/>
    </div>
  )
}

export default App
