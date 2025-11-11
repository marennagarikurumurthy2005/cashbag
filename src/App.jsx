import React from 'react'
import Formpage from './pages/Formpage'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Formpage/>}/>
      </Routes>
    </div>
  )
}

export default App